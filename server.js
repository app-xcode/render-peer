import express from 'express';
import { PeerServer } from 'peer';

const app = express();
const port = process.env.PORT || 10000;

// Buat instance PeerJS server
const peerServer = PeerServer({
  port,
  path: '/myapp',
  proxied: true,
  allow_discovery: true
});

app.use('/myapp', peerServer);

app.get('/', (req, res) => {
  res.send('✅ PeerJS Server running on Railway');
});

app.listen(port, () => {
  console.log(`🚀 PeerJS server is running on port ${port}`);
});
