import { axiosInstance } from "../../../lib/axios"

const checkAuthApi = async()=>{
    try{

        const res = await axiosInstance.get("/auth/me");
        console.log("check auth res :",res.data);

        return res.data.user;

    }catch(err:any){
        console.log("Error in check auth api : ",err.message);
    }
}

export default checkAuthApi;