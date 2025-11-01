const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 8080;

// Integrasikan PeerJS langsung ke Express
const peerServer = ExpressPeerServer(app, {
  path: '/myapp',
  allow_discovery: true,
  proxied: true,
});

app.use('/myapp', peerServer);

// Endpoint utama untuk Railway health check
app.get('/', (req, res) => {
  res.send('✅ PeerJS Server running on Railway');
});

// Jalankan satu server untuk semuanya
app.listen(port, () => {
  console.log(`🚀 PeerJS server is running on port ${port}`);
});
