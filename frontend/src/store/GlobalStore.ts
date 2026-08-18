import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/store/auth.slice";

const GlobalStore = configureStore({
    reducer:{
     auth:authReducer
    }
});

export type RootState = ReturnType<
  typeof GlobalStore.getState
>;

export type AppDispatch = typeof GlobalStore.dispatch;


export default GlobalStore;