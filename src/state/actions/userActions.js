const User = require('../models/user')

const login  = (props, cb) => {
    createUser(props,(error, answer) =>{
        if(error!==null) cb(error)
        else cb(null, answer)
    })
}

const createUser = (props,cb) =>{
    const {name,socketID} = props
    User.create({
        name,
        socketID
    }, (error,docs) => {
        if(error) cb(error)
        else cb(null)
    })
}

const deleteUser = (props, cb) =>{
    const {socketID} = props
    User.remove({socketID},(error, docs) => {
        if(error) cb(error)
        else cb(null)
    })
}

module.exports = {
    login,
    deleteUser
}