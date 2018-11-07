const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        teas_List:{
            type:Array,
            default:[]
        },
        socketID:{
            type:String,
            required:true,
            minlength:3,
            maxlength:16
        }
    },
    {
        versionKey: false 
    }
)

module.exports = mongoose.model("User", user)