import { axiosInstance } from "../../../lib/axios"
import type { LoginFormData } from "../schema/auth.schema";

const loginApi = async(data:LoginFormData)=>{

    try{

        const res = await axiosInstance.post("/auth/login",data);
        console.log("login response", res.data);

        return res.data.user;

    }catch(err:any){
        console.log("Error in login api :",err.message);
        throw err;
    }
}

export default loginApi;