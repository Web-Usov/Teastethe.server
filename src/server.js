const express = require('express')
const http = require('http')
const SocketIO = require('socket.io')
const db = require('./db')
require('dotenv').config()

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const port = process.env.PORT || 3000;

db().then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    server.listen(port, () => {
      console.log('Listening on *:' + port);
    });
  }).catch(() => {
    console.error('Unable to connect to database :(')  
})

module.exports = io