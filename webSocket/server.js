const http = require('http');
const WebSocket = require('ws');
const getMockData = require('./readFile.js');

const server = http.createServer();
const base_ws = new WebSocket.Server({ noServer: true });
let data = {};
getMockData(mockData => {
  data = mockData;
});

base_ws.on('connection', ws => {
  console.log('ws connection success!');
  setTimeout(() => {
    ws.send(JSON.stringify(data[0].ws));
  }, 1900)
});

server.on('upgrade', (request, socket, head) => {
  const pathname = request.url;

  if (pathname === '/base') {
    base_ws.handleUpgrade(request, socket, head, ws => {
      base_ws.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(8081);