import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const db_url = process.env.DB_URL

const ConnectToDB = async()=>{
    try{
        if(!db_url){
            throw new Error("Missing db credentials");
        }

        await mongoose.connect(db_url);
        console.log(`Database connected successfully ✅`)

    }catch(err){
        const message = err instanceof Error ? err.message : null;
       console.log("error in connect to db :",message);
    }
}

export default ConnectToDB;