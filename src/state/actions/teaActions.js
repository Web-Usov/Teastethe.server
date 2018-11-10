const Tea = require('../models/tea')

const addTea = (props, cb) => {    
    const {name,type} = props
    Tea.create({
        name,
        type
    },(error,docs) =>{
        if(error) cb(error.message)
        else cb(null,docs)
    })
}

const getAllTeas = (cb) => {
    Tea.find({},(error, docs) => {
        if(error) cb(error.message)
        else cb(null,docs)
    })
} 

const deleteTea = (props, cb) => {
    const {teaId} = props
    Tea.findByIdAndDelete(teaId,(error, docs) => {
        if(error) cb(error.message)
        else cb(null)
    })
}
module.exports = {
    addTea,
    getAllTeas,
    deleteTea
}