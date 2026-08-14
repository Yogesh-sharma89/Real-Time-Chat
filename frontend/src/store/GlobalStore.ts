import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/store/auth.slice";

const GlobalStore = configureStore({
    reducer:{
     auth:authReducer
    }
});


export default GlobalStore;