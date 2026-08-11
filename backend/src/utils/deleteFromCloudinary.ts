
import cloudinary from "../config/cloudinary"
import AppError from "./appError";

export const deleteFromCloudinary = async(publicId:string)=>{
    try{  

      await cloudinary.uploader.destroy(publicId);

      console.log(`File deleted successfully`);

    }catch(err){
      throw new AppError("Failed to destroy image on cloudinary",502);
    }
}