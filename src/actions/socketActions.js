const actions = require('.')

module.exports = (io,socket) =>{
    socket.on('login', (name) => {
        actions.userActions.login(
            {
                name,
                socketID:socket.id
            },
            (error, answer) => {
                if(error!==null) socket.emit('login',{error})
                else{
                    socket.emit('login',{
                        error:null,
                        name
                    })
    
                    socket.on('disconnect',() => {
                        actions.userActions.deleteUser({socketID:socket.id},(error, answer) => {
                            if(error) console.error(error)
                            else console.log("User left - ",name)           
                        })   
                    })
                }
            }
        )        
    })

    socket.on('allTeas', () => {
        
        actions.teaActions.getAllTeas((error, answer) => {
            if(error) socket.emit({error})
            else socket.emit('allTeas',{teas:answer})
        })        
    })

    socket.on('addTea',(tea) => {
        actions.teaActions.addTea(tea,(error, answer)=>{
            if(error) socket.emit('addTea',{error})  
            else {
                socket.broadcast.emit('addTea',{
                    tea:answer,
                    isYourTea:false
                })
                socket.emit('addTea',{
                    tea:answer,
                    isYourTea:true
                })
            }            
        })
    })

    socket.on('deleteTea', (teaId) => {
        actions.teaActions.deleteTea(teaId, (error, answer) => {
            if(error) socket.emit('deleteTea', {error})
            else{
                io.emit('deleteTea',{
                    teaId,
                    socketId:socket.id
                })
            }
        })
    })
}