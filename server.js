const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = parseInt(process.env.PORT || "3000", 10);

// Find dist/ regardless of working directory
const DIST = [
  path.join(__dirname, "dist"),
  path.join(process.cwd(), "dist"),
].find((d) => fs.existsSync(d)) || path.join(__dirname, "dist");

console.log("PORT:", PORT);
console.log("DIST:", DIST, "| exists:", fs.existsSync(DIST));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".webp": "image/webp",
};

http
  .createServer((req, res) => {
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
  })
  .listen(PORT, "0.0.0.0", () => console.log("Ready on port " + PORT));
