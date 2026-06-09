import { createReadStream, existsSync, statSync } from "node:fs";
import { appendFile, mkdir } from "node:fs/promises";
import { extname, join, normalize, relative } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

createServer(async (request, response) => {
  const url = new URL(request.url || "/", "http://localhost");

  if (url.pathname === "/api/messages" && request.method === "POST") {
    try {
      const body = await readJsonBody(request);
      const message = String(body.message || "").trim().slice(0, 1200);
      const name = String(body.name || "").trim().slice(0, 80);
      const page = String(body.page || "").trim().slice(0, 240);

      if (!message) {
        sendJson(response, 400, { ok: false, error: "message_required" });
        return;
      }

      const record = {
        createdAt: new Date().toISOString(),
        name,
        message,
        page,
      };

      await mkdir(join(root, "data"), { recursive: true });
      await appendFile(join(root, "data", "messages.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
      sendJson(response, 201, { ok: true });
    } catch {
      sendJson(response, 400, { ok: false, error: "invalid_payload" });
    }
    return;
  }

  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = join(root, safePath === "/" ? "index.html" : safePath);
  const relativePath = relative(root, requestedPath);
  const staysInsideRoot = relativePath && !relativePath.startsWith("..") && !relativePath.includes(":");
  const hasFile = staysInsideRoot && existsSync(requestedPath) && statSync(requestedPath).isFile();
  const isAssetRequest = extname(url.pathname) || url.pathname.startsWith("/assets/");

  if (!hasFile && isAssetRequest) {
    response.statusCode = 404;
    response.end("Not found");
    return;
  }

  const path = hasFile ? requestedPath : join(root, "index.html");
  const stats = statSync(path);
  const contentType = mime[extname(path).toLowerCase()] || "application/octet-stream";

  response.setHeader("Content-Type", contentType);
  response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  response.setHeader("Pragma", "no-cache");
  response.setHeader("Expires", "0");

  const range = request.headers.range;
  if (range && contentType.startsWith("video/")) {
    const [startRaw, endRaw] = range.replace(/bytes=/, "").split("-");
    const start = Number.parseInt(startRaw, 10);
    const end = endRaw ? Number.parseInt(endRaw, 10) : stats.size - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start >= stats.size || end >= stats.size) {
      response.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
      response.end();
      return;
    }

    response.writeHead(206, {
      "Accept-Ranges": "bytes",
      "Content-Length": end - start + 1,
      "Content-Range": `bytes ${start}-${end}/${stats.size}`,
      "Content-Type": contentType,
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(path, { start, end }).pipe(response);
    return;
  }

  response.setHeader("Content-Length", stats.size);
  if (request.method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(path).pipe(response);
}).listen(port, "0.0.0.0", () => {
  console.log(`Slow Erosion site running at http://localhost:${port}`);
});

function sendJson(response, statusCode, payload) {
  const json = JSON.stringify(payload);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache",
    "Content-Length": Buffer.byteLength(json),
  });
  response.end(json);
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 16_384) {
        request.destroy();
        reject(new Error("payload_too_large"));
      }
    });

    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(error);
      }
    });

    request.on("error", reject);
  });
}
