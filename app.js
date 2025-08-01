const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example custom API route
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

  // Let Next.js handle all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});