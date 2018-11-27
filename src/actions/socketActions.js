const {userActions, teaActions} = require('.')

module.exports = (io,socket) =>{
    let sUser = socket.handshake.session.user;
    console.log('INIT', socket.handshake.session.user);
    
    socket.on('getUser',()=>{
        if(sUser)
            userActions.getUser(sUser,(error, user) => {
                if (error) return socket.emit('getUser', {error})
                socket.emit('getUser',{
                    error:null,
                    user             
                })
            })
            
        socket.emit('getUser',{
            error:'You are not authorized',
        })
    })
    socket.on('login', (data) => {
        if(sUser) return socket.emit('login',{
            error:'You are already logged in.'
        })
        const {name} = data
        userActions.login({name},(error, answer) => {
            if(error) return socket.emit('login',{error})
            socket.handshake.session.user = answer._id;
            socket.handshake.session.save();
            sUser = socket.handshake.session.user;    
            
            socket.emit('login',{
                error:null,
                user:answer
            })
        })                            
    })
    socket.on('register',(data) =>{
        if(sUser) return socket.emit('register',{
            error:'You must logout before registering'
        })
        userActions.register((data), (error, answer) => {
            if(error) return socket.emit('register',{error})   
            socket.emit('register',({
                error:null,
                message:"You have successfully registered"
            }))         
        })
    })
    socket.on('logout',()=>{
        if(sUser){
            socket.emit('logout')
            delete socket.handshake.session.user;
            socket.handshake.session.save();
            sUser = socket.handshake.session.user; 
        }
    }) 

    socket.on('allTeas', () => {
        if(!sUser) return new Error('E-allTeas: User is not authorized')
        teaActions.getAllTeas((error, answer) => {
            if(error) return socket.emit({error})
            socket.emit('allTeas',{teas:answer})
        })        
    })

    socket.on('addTea',(tea) => {
        if(!sUser) return new Error('E-addTea: User is not authorized')
        userActions.getUser(sUser, (error, answer) => {
            if(error) return socket.emit('addTea', {error})
            console.log(tea, answer);
            
            tea = {
                ...tea,
                parent:{
                    id:answer._id,
                    name:answer.name,
                },
            }
            
            teaActions.addTea(tea,(error, answer)=>{
                if(error) return socket.emit('addTea',{error})  
                socket.broadcast.emit('addTea.b',{tea:answer})
                socket.emit('addTea',{tea:answer})                          
            })
        })
        
        
    })

    socket.on('deleteTea', (teaId) => {
        if(!sUser) return new Error('E-deleteTea: User is not authorized')
        teaActions.deleteTea(teaId, (error, answer) => {
            if(error) return socket.emit('deleteTea', {error})
            io.emit('deleteTea',{
                teaId,
                socketId:socket.id
            })
        })
    })
}