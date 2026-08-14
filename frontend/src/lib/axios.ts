import axios, { AxiosError } from "axios";
import { ApiError, type ApiErrorResponse } from "../types/api.type";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL:base_url,
  withCredentials:true,
  timeout:10000
})


axiosInstance.interceptors.response.use(
    (response)=>response,

    (error:AxiosError<ApiErrorResponse>)=>{

        if(!error.response){
            throw new ApiError("Unable to connect with  server",0,"NETWORK_ERROR")
        }

        const {status,data} = error.response;

        throw new ApiError(
            data.message || 'Something went wrong',
            status,
            data.code,
            data.errors,
        )
    }
)