import bcrypt from "bcrypt";
import AppError from "./appError";

export const CheckPassword = async(password:string,hashPassword:string)=>{

    if(!password.trim() || !hashPassword.trim()){
        throw new AppError("Invalid password",401);
    }
    
    try{
        const isPasswordMatch = await bcrypt.compare(password,hashPassword);
        
        if(!isPasswordMatch){
            throw new AppError("Invalid email or password",401);
        }
        return isPasswordMatch;

    }catch(err:any){
       console.log("Error in check password",err.message);
    }
}