import {io} from './server'
import {INFO, ERROR, SOCKET} from './consts'
import {store} from "./state"
import {userActions, teaActions} from './state/actions'
import socketActions from './socketActions'
 
// store.add("teas", {name:"TESS - raspberry",type:"black - berry"})
// store.add("teas", {name:"TESS - lemon",type:"green - fruit"})
teaActions.addTea({name:"TESS - raspberry",type:"black - berry"},(data) => {
    if(data.error){
        console.log(data.error)        
    }    
})


io.on('connection', socket => {
    console.log(SOCKET,"Connected",socket.id)
    
    socket.on('disconnect',() => {
        console.log(SOCKET,"Disconnected",socket.id)     
    })

    socket.on('error', (error) => {
        console.log(ERROR,error)      
    })

    socketActions(socket)
})