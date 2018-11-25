const User = require('../models/user')

const login  = (props, cb) => {
    // createUser(props,(error, answer) =>{
    //     if(error) cb(error)
    //     else cb(null, answer)
    // })
    const {name} = props;
    User.findOne({name}, (error,user) => {        
        if (error) {
            console.error(error)            
            cb(error.message)            
        }else if(!user){
            cb('User not found')
        }else{
            cb(null, user)
        }
    })
}

const register = (props,cb) =>{
    const {name} = props
    createUser({name},(error,user) => {
        if(error) return cb(error)
        cb(null)
    })
}

const createUser = (props,cb) =>{
    const {name} = props
    User.create({
        name
    }, (error,user) => {
        
        if(error) {
            console.error(error)
            
            cb(error.message)
        }
        else cb(null,user)
    })
}
const getUser = (id, cb) =>{
    User.findById(id, (error, user) => {
        if(error) cb(error.message)
        else{
            if(!user) cb ('User not found')
            else cb(null, user)
        }
    })
}

const deleteUser = (props, cb) =>{
    const {id} = props
    User.remove({_id:id},(error, docs) => {
        if(error) cb(error.message)
        else cb(null)
    })
}

module.exports = {
    login,
    deleteUser,
    createUser,
    getUser,
    register
}