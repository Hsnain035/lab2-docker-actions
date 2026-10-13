const http = require('http');
const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from my DevOps lab app!\n');
}).listen(PORT, () => console.log(`Listening on port ${PORT}`));
