const http = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PORT = parseInt(process.env.PORT || "3000", 10);
const DIST = path.join(__dirname, "dist");

// Always rebuild so each new deployment serves fresh code.
// (dist/ is gitignored — git pull brings new source but leaves old dist/ intact)
console.log("Building...");
execSync("npm run build", { stdio: "inherit", cwd: __dirname });

console.log("Serving", DIST, "on port", PORT);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0].split("#")[0];
  if (urlPath !== "/" && urlPath.endsWith("/")) urlPath = urlPath.slice(0, -1);

  const base = path.join(DIST, urlPath);
  let found = null;

  for (const c of [base, path.join(base, "index.html"), base + ".html"]) {
    try {
      if (fs.statSync(c).isFile()) { found = c; break; }
    } catch (_) {}
  }

  if (!found) {
    const notFound = path.join(DIST, "404.html");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    try { res.end(fs.readFileSync(notFound)); } catch (_) { res.end("404"); }
    return;
  }

  const ext = path.extname(found).toLowerCase();
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(fs.readFileSync(found));
});

server.on("error", (err) => {
  console.error("Server error:", err.message);
  process.exit(1);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Ready on port " + PORT);
});
