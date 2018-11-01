import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import * as consts from './consts'
import './consoleRead'

let app = express();
let server = http.Server(app);
let io = new SocketIO(server);
const port = process.env.PORT || 3100;

server.listen(port, () => {
  console.log(consts.INFO,'Listening on *:' + port);
});

export {io}