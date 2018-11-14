const io = require('./server')
const socketEvents = require('./actions/socketActions')
const serverActions = require('./actions/serverActions')

serverActions.deleteAllUsers()

io.on('connection', socket => {
    console.log("Connected",socket.id)
    
    socket.on('error', (error) => {
        console.error(error)      
    })

    socket.on('disconnect',() => {
        console.log("Disconnected",socket.id)     
    })

    socketEvents(io,socket)
})