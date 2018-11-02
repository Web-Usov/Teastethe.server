import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import * as consts from './consts'

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = process.env.PORT || 3100;

server.listen(port, () => {
  console.log(consts.INFO(),'Listening on *:' + port);
});

export {io}