const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 8080;

// Buat PeerJS server sebagai middleware Express
const peerServer = ExpressPeerServer(app, {
  path: '/myapp',
  allow_discovery: true,
  proxied: true
});

// Pasangkan PeerJS ke route /myapp
app.use('/myapp', peerServer);

// Route utama hanya untuk test koneksi Railway
app.get('/', (req, res) => {
  res.send('✅ PeerJS Server running on Railway');
});

// Jalankan Express
app.listen(port, () => {
  console.log(`🚀 PeerJS server is running on port ${port}`);
});
