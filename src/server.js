import express from 'express'
import http from 'http'
import SocketIO from 'socket.io'
import db from './db'

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = process.env.PORT || 3100;

db().then(info => {
  console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  server.listen(port, () => {
    console.log('Listening on *:' + port);
  });
}).catch(() => {
  console.error('Unable to connect to database :(')  
})

export {io}