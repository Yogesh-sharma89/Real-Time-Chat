import mongoose, { Schema,model } from "mongoose";
import type { MessageSchema } from "../../types/schema/chat/message";
import { MessageMediaSchema } from "./MessageMedia.model";


const messageSchema = new Schema<MessageSchema>({

  sender:{
    type:mongoose.Types.ObjectId,
    required:true,
  },
  receiver:{
     type:mongoose.Types.ObjectId,
    required:true,
  },
  content:{
    type:String,
    trim:true,
    default:""
  },

  media:[
    {
        type:MessageMediaSchema,
    }
  ]

},{
    timestamps:true
})

const MessageModel = model<MessageSchema>("message",messageSchema);

export default MessageModel;