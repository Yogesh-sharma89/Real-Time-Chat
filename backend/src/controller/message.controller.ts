import type { MediaSchema } from "../../types/schema/chat/message";
import asyncHandler from "../middleware/asyncHandler";
import MessageModel from "../models/message.model";
import UserModel from "../models/user.model";
import AppError from "../utils/appError";
import UploadToCloudinary from "../utils/UploadToCloudinary";

export const GetAllContacts = asyncHandler(async (req, res) => {

  //it means get all users that exist in db for now 

  const currentUserId = req.userId;

  const users = await UserModel.find({ _id: { $ne: currentUserId } });

  res.status(200).json({
    success: true,
    message: "All contacts got successfully",
    users
  })

})

export const GetChatPartners = asyncHandler(async (req, res) => {

  //it send the other users i have chat with before 
  //means messages where reeiver and sender in currentUser 

  const currentUserId = req.userId;

  const messages = await MessageModel.find({
    $or: [
      { sender: currentUserId },
      { receiver: currentUserId }
    ]
  })

  const chatPartnerIds = [...new Set(messages.map((msg) => msg.sender.toString() === currentUserId ?     msg.receiver.toString() : msg.sender.toString()))];

  const chatPartners = await UserModel.find({_id:{$in:chatPartnerIds}})

  res.status(200).json({
    success:true,
    message:"Got chat-partners successfully",
    users:chatPartners
  })


  
})



export const GetMessagesByUserId = asyncHandler(async (req, res) => {

  const { userId: secondUserId } = req.params;

  if (Array.isArray(secondUserId) || secondUserId === undefined) {
    throw new AppError("Invalid request", 400);
  }
  //this controller is for get the all message/chats between current and specific user 
  const currentUserId = req.userId;

  const messages = await MessageModel.find({
    $or: [
      { sender: currentUserId, receiver: secondUserId },
      { sender: secondUserId, receiver: currentUserId }
    ]
  })

  res.status(200).json({
    success: true,
    message: "Messages Got successfully",
    messages
  })
})


export const SendMessage = asyncHandler(async (req, res) => {

  const { userId:otherUserId } = req.params;

  if (Array.isArray(otherUserId) || otherUserId === undefined) {
    throw new AppError("Invalid request", 400);
  }

  const currentUserId = req.userId;

  const { content } = req.body;

  const file = req.file?.path;

  let media: MediaSchema[] = [];
  if (file) {
    //first uplod that file 
    const uploadRes = await UploadToCloudinary(file, "message");

    media.push({
      url: uploadRes.secure_url,
      format: uploadRes.format,
      publicId: uploadRes.public_id,
      originalName: uploadRes.original_filename,
      size: uploadRes.bytes
    })
  }

  //create the message 

  const newMessage = await MessageModel.create({
    sender: currentUserId!,
    receiver: otherUserId!,
    content,
    media
  })

  //before sending reponse we have to send message with the help of socket.io

  res.status(201).json({
    success: true,
    message: "Message created successfully",
    newMessage
  })

})