import { Schema } from "mongoose";
import type {MediaSchema} from "../../types/schema/chat/message"

export const MessageMediaSchema = new Schema<MediaSchema>({

    url:{
        type:String,
        required:true,
        trim:true,
    },
    publicId:{
        type:String,
        required:true,
    },
    originalName:{
         type:String,
        required:true,
    },
    format:{
         type:String,
        required:true,
    },
    size:{
         type:Number,
        required:true,
    }

},
{
    _id:false
})