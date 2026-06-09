import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name = "", message = "", page = "" } = req.body || {};
  if (!message.trim()) return res.status(400).json({ error: "Message required" });

  const entry = JSON.stringify({ name, message, page, createdAt: new Date().toISOString() }) + "\n";

  try {
    const dir = join(tmpdir(), "slow-erosion-messages");
    await mkdir(dir, { recursive: true });
    await appendFile(join(dir, "messages.jsonl"), entry, "utf8");
  } catch {
    // non-fatal: log to stderr for Vercel function logs
    console.error("save failed:", entry.trim());
  }

  return res.status(200).json({ ok: true });
}
