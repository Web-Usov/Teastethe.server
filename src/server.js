const config = require('./config')
const db = require('./db')
const express = require('express')
const http = require('http')
const SocketIO = require('socket.io')
const session = require('express-session')
const mongoStore = require('connect-mongo')(session);
const ioSession = require('express-socket.io-session')
const cors = require('cors')
const sessionMiddleware  = session({
  secret:"topSecrets",
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({
    url:config.MONGO_URL
  })
})

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);
const { PORT } = config


app.use(cors())
app.use(sessionMiddleware);
app.get('/api', (req,res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);  
  res.sendStatus(200)
})

io.use(ioSession(sessionMiddleware)) 

db().then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    
  
    server.listen(PORT, () => {
      console.log('Listening on *:' + PORT);
    });
  }).catch(() => {
    console.error('Unable to connect to database :(')  
})

module.exports = {
  io
}