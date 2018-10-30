import {teaActions, userActions} from './state/actions'
import {store} from './state'

export default (socket) =>{
    socket.on('login', (name) => {
        setTimeout(() => {
            userActions.login(
                {socket,name},
                (data) => {
                    const {error,name} = data

                    if(error){
                        return socket.emit('login',{
                            error
                        })                    
                    }

                    socket.emit('login', {
                        error:null,
                        name
                    })
                
                    socket.on('disconnect',() => {
                        userActions.deleteUser(socket.id)
                    })
                }
            )                
        }, 500)
    })

    socket.on('reqAllTeas', () => {
        socket.emit('resAllTeas',{
            teas:store.teas,
            teasId:store.teasId
        })
    })

    socket.on('addTea',(req) => {
        teaActions.addTea(req,(data)=>{
            const {error,tea} = data 
            if(error){
                return socket.emit('addTea',{
                    error
                })     
            }
            socket.broadcast.emit('addTea',{
                error:null,
                tea,
                isYourTea:false
            })
            socket.emit('addTea',{
                error:null,
                tea,
                isYourTea:true
            })
        })
    })


}