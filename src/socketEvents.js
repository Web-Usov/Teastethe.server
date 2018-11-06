import {teaActions, userActions} from './state/actions'

export default (socket) =>{
    socket.on('login', (name) => {
        userActions.login(
            {
                name,
                socketID:socket.id
            },
            (error, answer) => {
                if(error!==null){
                    return socket.emit('login',{error})
                }
                socket.emit('login',{
                    error:null,
                    name
                })

                socket.on('disconnect',() => {
                    userActions.deleteUser({socketID:socket.id},(error, answer) => {
                        if(error) console.error(error)
                        else console.log("User left - ",name)           
                    })   
                })
            }
        )        
    })

    socket.on('allTeas', () => {
        
        teaActions.getAllTeas((error, answer) => {
            if(error) return socket.emit({error})
            return socket.emit('allTeas',{
                teas:answer
            })
        })

        
    })

    socket.on('addTea',(tea) => {
        teaActions.addTea(tea,(error, answer)=>{
            if(error){
                return socket.emit('addTea',{
                    error
                })     
            }
            
            socket.broadcast.emit('addTea',{
                error:null,
                tea:answer,
                isYourTea:false
            })
            socket.emit('addTea',{
                error:null,
                tea:answer,
                isYourTea:true
            })
        })
    })
}