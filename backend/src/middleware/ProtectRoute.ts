import AppError from "../utils/appError";
import { VerifyToken } from "../utils/jwtToken";
import asyncHandler from "./asyncHandler";

export const ProtectRoute = asyncHandler(async(req,res,next)=>{

    const token = req.cookies?.token as string;

    if(!token){
        throw new AppError("Unauthorized access",401);
    }

    //if token is present then check token is valid or not 

    const decodedData = VerifyToken(token);
    
    if(!decodedData){
        throw new AppError("Malware token detected",403);
    }

    req.userId = decodedData;

})