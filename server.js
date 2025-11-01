import { PeerServer } from 'peer';

const port = process.env.PORT || 10000;
const peerServer = PeerServer({
  port,
  path: '/myapp',
  proxied: true,
  allow_discovery: true
});

console.log(`✅ PeerJS server running on port ${port}`);
