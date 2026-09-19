const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml"
};

http
  .createServer((request, response) => {
    let pathname = decodeURIComponent((request.url || "/").split("?")[0]);
    if (pathname === "/") pathname = "/index.html";

    const file = path.normalize(path.join(root, pathname));
    if (!file.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    fs.readFile(file, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
      response.end(data);
    });
  })
  .listen(port, () => {
    console.log(`Lost & Found running at http://localhost:${port}`);
  });
