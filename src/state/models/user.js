import mongoose, {Schema} from 'mongoose'

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
            required:true
        }
    },
    {
        versionKey: false 
    }
)

export default mongoose.model("User", user)