const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tea = new Schema(
    {
        name:{
            type:String,
            required:true,
            minlength:3,
            maxlength:24
        },
        type:{
            type:String,
            default:"Default",
            minlength:3,
            maxlength:24
        },
        reating:{
            type:Number,
            default:0.0
        }
    }
)

module.exports =  mongoose.model("Tea", tea);