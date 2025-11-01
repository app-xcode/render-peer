const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("✅ Express server running perfectly on Railway!");
});

app.get("/ping", (req, res) => {
  res.json({ message: "pong", time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 Express server is running on port ${port}`);
});
