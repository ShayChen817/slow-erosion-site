export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Vercel non-Next.js: req.body is a stream, read it manually
  let body = {};
  try {
    const raw = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", chunk => { data += chunk; });
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });
    body = raw ? JSON.parse(raw) : {};
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const { name = "", message = "", page = "" } = body;
  if (!String(message).trim()) {
    return res.status(400).json({ error: "Message required" });
  }

  // Log to Vercel function logs (visible in Vercel dashboard → Logs)
  console.log(JSON.stringify({
    name: String(name).trim(),
    message: String(message).trim(),
    page: String(page).trim(),
    createdAt: new Date().toISOString(),
  }));

  return res.status(200).json({ ok: true });
}
