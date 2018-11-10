const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            minlength:3,
            maxlength:16
        },
        password:{
            type:String,
            minlength:4,
            maxlength:16
        },
        socketID:{
            type:String,
            required:true,
            unique:true,
        },
        teasAdded:{
            type:Array,
            default:[]
        },
    },
    {
        versionKey: false 
    }
)

module.exports = mongoose.model("User", user)