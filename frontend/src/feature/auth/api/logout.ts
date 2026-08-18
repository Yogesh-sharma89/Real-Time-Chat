import { axiosInstance } from "../../../lib/axios"

const logoutApi = async()=>{
    try{

       const res= await axiosInstance.post("/auth/logout");
       return  res.data;

    }catch(err:any){
        console.log("Error in logout api error : ",err.message);
        throw err;
    }
}

export default logoutApi;