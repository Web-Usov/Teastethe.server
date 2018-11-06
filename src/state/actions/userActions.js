import {User} from '../models'


export const login  = (props, cb) => {
    const {name} = props
    if(name.length > 16){
        return cb("Name must be less than 16 characters and longer than 3 characters")
    }
    createUser(props,(error, answer) =>{
        if(error!==null){
            return cb(error)
        }
        return cb(null, answer)
    })
}

const createUser = (props,cb) =>{
    const {name,socketID} = props
    User.create({
        name,
        socketID
    }, (error,docs) => {
        if(error) return cb(error)
    })
    return cb(null)
}
export const deleteUser = (props, cb) =>{
    const {socketID} = props
    User.remove({socketID},(error, docs) => {
        if(error) return cb(error)
    })
    return cb(null)
}
