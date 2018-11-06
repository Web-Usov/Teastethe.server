import mongoose, {Schema} from 'mongoose'

const tea = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        type:{
            type:String,
            default:"Default"
        },
        reating:{
            type:Number,
            default:0.0
        }
    }
)

export default mongoose.model("Tea", tea);