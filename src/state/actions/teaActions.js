import {Tea} from '../models'

export const addTea = (props, cb) => {
    
    const {name,type} = props
    if(name.length > 24 || name.length < 3)
        return cb({error:"Name must be less than 24 characters and longer than 3 characters"})

    Tea.create({
        name,
        type
    },(error,docs) =>{
        if(error) return cb(error)
        return cb(null,docs)
    })
}

export const getAllTeas = (cb) => {
    Tea.find({},(error, docs) => {
        if(error) return cb(error)
        return cb(null,docs)
    })
} 