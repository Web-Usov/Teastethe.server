import {io} from './server'
import socketEvents from './socketEvents'


io.on('connection', socket => {
    console.log("Connected",socket.id)
    
    socket.on('error', (error) => {
        console.error(error)      
    })

    socket.on('disconnect',() => {
        console.log("Disconnected",socket.id)     
    })

    socketEvents(socket)
})