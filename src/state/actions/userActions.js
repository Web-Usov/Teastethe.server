import store from '../store'
import {User} from '../models'
import {INFO} from '../../consts'

export const addTeaForUser = (user,tea) =>{
    // const _tea = store.teas.find(x => x.id === tea.id)
    // if(!_tea){
    //     store.add("teas",tea)
    // }    
    // const teaOfUser = user.teas.find(x => x.id === tea.id)
    // if(teaOfUser){
    //     console.log(TYPE_ERROR,"уже добавлен");
    //     return
    // }
    // store.update("users",{
    //     id:user.id,
    //     teas:[...user.teas,tea]
    // })
}

export const login = (data,cb) =>{
    const {socket,name} = data
    if(name.length > 16 || name.length < 3)
        return cb({error:"Name must be less than 16 characters and longer than 3 characters"})
    if(findUserByName(name)!==null)
        return cb({error:"This name already used!"})
    
    createUser({socket,name})
    cb({
        error:null,
        name
    })

}

export const createUser = (data) =>{
    const {socket,name} = data
    console.log(INFO(),"User",name,"login");
    store.usersId.push(socket.id)
    store.users[socket.id] = new User({
        id:socket.id,
        name
    })
}

export const deleteUser = (id) => {
    console.log(INFO(),"User",store.users[id].name,"left"); 
    delete store.users[id]
    const indexToRemove = store.usersId.indexOf(id);
    store.usersId.splice(indexToRemove , 1)
}
export const findUserByName = (name) => {
    let findUser = null
    store.usersId.map(userId => {
        const user = store.users[userId]
        if(user.name.toString() === name.toString())
            return findUser = user                
    })
    if(findUser) return findUser
        else return null
}