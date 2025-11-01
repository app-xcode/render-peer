const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const port = process.env.PORT || 10000;

const peerServer = ExpressPeerServer(app, {
  path: '/myapp',
  allow_discovery: true,
});

app.use('/myapp', peerServer);

app.get('/', (req, res) => {
  res.send('✅ PeerJS Server running on Railway');
});

app.listen(port, () => {
  console.log(`🚀 PeerJS server is running on port ${port}`);
});
