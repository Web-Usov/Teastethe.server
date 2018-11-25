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
        },
        parent:{
            id:{
                type:Number,
                default:0
            },
            name:{
                type:String,
                default:"System"
            }
        }
    }, {
        versionKey: false,
    }
)

module.exports =  mongoose.model("Tea", tea);