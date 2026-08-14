import mongoose, { Schema, model } from "mongoose";
import type { MessageSchema } from "../../types/schema/chat/message";
import { MessageMediaSchema } from "./MessageMedia.model";


const messageSchema = new Schema<MessageSchema>({

  sender: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  receiver: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    default: ""
  },

  media: [
    {
      type: MessageMediaSchema,
    }
  ]

}, {
  timestamps: true
})

messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });
messageSchema.index({ receiver: 1, sender: 1, createdAt: -1 });

messageSchema.pre("validate", function (next) {

  const hasContent = typeof this.content === "string" ? this.content.trim().length > 0 :               Boolean(this.content);

  const mediaLength = Array.isArray(this.media) ? this.media.length : 0;

  if (!hasContent && mediaLength === 0) {
    throw new Error("Either content or media is required")
  }

  return next;
});

const MessageModel = model<MessageSchema>("message", messageSchema);

export default MessageModel;