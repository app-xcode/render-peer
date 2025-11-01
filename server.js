import express from "express";
import { ExpressPeerServer } from "peer";

const app = express();
const port = process.env.PORT || 8080;

// Tes route biasa
app.get("/", (req, res) => {
  res.send("✅ PeerJS + Express server running perfectly on Railway!");
});

// Buat HTTP server dari express app
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${port}`);
});

// Tambahkan PeerJS server di path /myapp
const peerServer = ExpressPeerServer(server, {
  path: "/myapp",
  debug: true,
});

app.use("/peerjs", peerServer);
