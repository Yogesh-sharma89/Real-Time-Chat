
import type { SignupFormData } from "../schema/auth.schema";
import { axiosInstance } from "../../../lib/axios";


const SignupApi = async(data:SignupFormData)=>{

    try{

        const res = await axiosInstance.post("/auth/signup",data);

        console.log("Response in sign up api :",res.data);

       return res.data.user;

    }catch(err:any){
       console.log("Error in sign up api :",err.message)
    }

}

export default SignupApi;