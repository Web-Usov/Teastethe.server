import {io} from './server'
import * as consts from './consts'
import {userActions, teaActions} from './state/actions'
import socketActions from './socketActions'
 
// store.add("teas", {name:"TESS - raspberry",type:"black - berry"})
// store.add("teas", {name:"TESS - lemon",type:"green - fruit"})
teaActions.addTea({name:"TESS - raspberry",type:"black - berry"},(data) => {
    console.log(consts.ACTION(),"app_1")
    if(data.error){
        console.log(consts.ACTION(),"app_2")
        console.log(consts.ERROR(),data.error)        
    }    
})


io.on('connection', socket => {
    console.log(consts.SOCKET(),"Connected",socket.id)
    

    socketActions(socket)

    socket.on('error', (error) => {
        console.log(consts.ERROR(),error)      
    })

    socket.on('disconnect',() => {
        console.log(consts.ACTION(),"app_3")
        console.log(consts.SOCKET(),"Disconnected",socket.id)     
    })

    setTimeout(() => socket.disconnect(true), consts.SOCKET_TIME_OUT);
})