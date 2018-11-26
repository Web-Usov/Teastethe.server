const {io} = require('./server')
const socketEvents = require('./actions/socketActions')
const {serverActions, userActions} = require('./actions')

// serverActions.deleteAllUsers()
// userActions.createUser({name:"Vasa", socketID:"12345"},(error,data)=>{
//     if(error) console.log(error);
//     else console.log(data)    
// })



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