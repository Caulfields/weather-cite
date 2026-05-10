const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 5173);
const POLYMARKET_API_BASE_URL = "https://gamma-api.polymarket.com/events/slug/";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function send(response, status, body, headers = {}) {
  response.writeHead(status, headers);
  response.end(body);
}

function serveFile(requestPath, response) {
  if (requestPath === "/" || requestPath === "\\") {
    requestPath = "index.html";
  }

  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, safePath);

  if (!filePath.startsWith(ROOT)) {
    send(response, 403, "Forbidden", { "Content-Type": "text/plain; charset=utf-8" });
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(response, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
      return;
    }

    send(response, 200, data, {
      "Cache-Control": "no-store",
      "Content-Type": MIME_TYPES[path.extname(filePath)] || "application/octet-stream"
    });
  });
}

async function proxyPolymarket(slug, response) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    send(response, 400, JSON.stringify({ error: "Invalid slug" }), {
      "Content-Type": "application/json; charset=utf-8"
    });
    return;
  }

  try {
    const apiResponse = await fetch(`${POLYMARKET_API_BASE_URL}${slug}`, {
      headers: {
        accept: "application/json",
        "user-agent": "city-stat-local-server"
      }
    });
    const body = await apiResponse.text();

    send(response, apiResponse.status, body, {
      "Cache-Control": "no-store",
      "Content-Type": apiResponse.headers.get("content-type") || "application/json; charset=utf-8"
    });
  } catch (error) {
    send(response, 502, JSON.stringify({ error: error.message }), {
      "Content-Type": "application/json; charset=utf-8"
    });
  }
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname.startsWith("/api/polymarket/")) {
    proxyPolymarket(url.pathname.replace("/api/polymarket/", ""), response);
    return;
  }

  serveFile(decodeURIComponent(url.pathname), response);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on http://127.0.0.1:${PORT}/`);
});
