import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import './consoleRead'

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port);
});





export {
  io
}