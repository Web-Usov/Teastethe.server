import {teaActions, userActions} from './state/actions'
import {store} from './state'
import * as consts from './consts'

export default (socket) =>{
    
    console.log(consts.ACTION(),"socketActions_1")

    socket.on('login', (name) => {
        setTimeout(() => {

            console.log(consts.ACTION(),"socketActions_2")
    
            userActions.login(
                {socket,name},
                (data) => {
    
                    console.log(consts.ACTION(),"socketActions_3")
    
                    const {error,name} = data

                    if(error){
                        
                        console.log(consts.ACTION(),"socketActions_4")
                        
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
        console.log(consts.ACTION(),"socketActions_5")
        
        socket.emit('resAllTeas',{
            teas:store.teas,
            teasId:store.teasId
        })
    })

    socket.on('addTea',(req) => {
        teaActions.addTea(req,(data)=>{
            console.log(consts.ACTION(),"socketActions_6")
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