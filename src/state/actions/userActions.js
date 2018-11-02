import store from '../store'
import {User} from '../models'
import * as consts from '../../consts'



export const login = (data,cb) =>{
    console.log(consts.ACTION(),"userActions_1")
    
    const {socket,name} = data
    if(name.length > 16 || name.length < 3)
        return cb({error:"Name must be less than 16 characters and longer than 3 characters"})
    if(findUserByName(name)!==null)
        return cb({error:"This name already used!"})
    
    console.log(consts.ACTION(),"userActions_2")
    
    createUser({socket,name})

    cb({
        error:null,
        name
    })

}

export const createUser = (data) =>{
    console.log(consts.ACTION(),"userActions_3")
    
    const {socket,name} = data
    console.log(consts.INFO(),"User",name,"login");
    store.usersId.push(socket.id)
    store.users[socket.id] = new User({
        id:socket.id,
        name
    })
}

export const deleteUser = (id) => {
    console.log(consts.INFO(),"User",store.users[id].name,"left"); 
    delete store.users[id]
    const indexToRemove = store.usersId.indexOf(id);
    store.usersId.splice(indexToRemove , 1)
    console.log(consts.ACTION(),"userActions_4")
}
export const findUserByName = (name) => {
    console.log(consts.ACTION(),"userActions_5")
    
    let findUser = null
    store.usersId.map(userId => {
        const user = store.users[userId]
        if(user.name.toString() === name.toString())
            return findUser = user                
    })
    if(findUser) return findUser
        else return null
}