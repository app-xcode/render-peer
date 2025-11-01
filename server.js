const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const port = process.env.PORT || 8080;

// Integrasi PeerJS ke Express
const peerServer = ExpressPeerServer(app, {
  path: "/myapp",
  allow_discovery: true,
  proxied: true,
});

app.use("/myapp", peerServer);

// Endpoint root supaya Railway tahu server hidup
app.get("/", (req, res) => {
  res.send("✅ PeerJS Server running on Railway");
});

app.listen(port, () => {
  console.log(`🚀 PeerJS server is running on port ${port}`);
});
