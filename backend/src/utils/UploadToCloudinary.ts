import cloudinary from "../config/cloudinary"
import AppError from "./appError";
import fs from 'fs/promises';

const UploadToCloudinary = async(filepath:string,folder:string = "uploads")=>{

    try{

        const res = await cloudinary.uploader.upload(filepath,{
            folder,
            resource_type:"auto"
        })

        console.log(`${res.original_filename} uploded to cloudinary`);

        await fs.unlink(filepath);

        return res;

    }catch(err:any){
       console.log(`Error in uploading file to cloudinary : ${err.message}`);
       throw new AppError("Failed to uplaod file ",500);
    }

}

export default UploadToCloudinary;