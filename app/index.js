import "dotenv/config";
import http from "node:http";

// Validate required environment variables
const MOTD = process.env.MOTD;
if (!MOTD) {
  console.error("MOTD is not set");
  process.exit(1);
}

// Create http server to serve the message of the day
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify({ message: MOTD }));
  }
  res.statusCode = 404;
  res.end("Not Found");
});

// Start server on specified port and listen on all interfaces
const port = 8000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Graceful shutdown
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    console.log(`Received ${signal}, shutting down`);
    server.close();
  });
}
