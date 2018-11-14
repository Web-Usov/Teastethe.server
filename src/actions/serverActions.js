const User = require('../models/user')
const Tea = require('../models/tea')

const deleteAllUsers = () => {
    User.deleteMany({}, (error) => {
        if(error) console.error(error)        
    })
}
module.exports = {
    deleteAllUsers
}