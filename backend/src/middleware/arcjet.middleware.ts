import { isSpoofedBot } from "@arcjet/inspect";
import aj from "../config/arcjet";
import AppError from "../utils/appError";
import asyncHandler from "./asyncHandler";

const ArcjetMiddleware = asyncHandler(async(req,res,next)=>{

    const decision  = aj.protect(req);

    if((await decision).isDenied()){

        if((await decision).reason.isRateLimit()){
            throw new AppError("Too many requests",429);

        }
        else if((await decision).reason.isBot()){
          throw new AppError("Bot access denied",403);
        }
        else if((await decision).reason.isPromptInjection()){
            throw new AppError("Prompt Injection deneid",403);
        }else{
            throw new AppError("Access denied by security policy",403);
        }
    }

    //check for spoofed bots 
    if((await decision).results.some(isSpoofedBot)){
        throw new AppError("Maliciois bot detected",403);
    }

    next();
})

export default ArcjetMiddleware;