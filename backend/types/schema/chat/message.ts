import type {Types} from "mongoose";

export interface MessageSchema{
    sender:Types.ObjectId,
    receiver:Types.ObjectId,
    content:string,
    media:[MediaSchema]
}


export interface MediaSchema{
    url:string,
    publicId:string,
    originalName:string,
    format:string,
    size:number
}