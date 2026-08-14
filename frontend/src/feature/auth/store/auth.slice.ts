import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:true
    },
    reducers:{

        createUser:(state,action)=>{
            state.user = action.payload,
            state.isAuthenticated = true,
            state.isLoading = false
        },

        logout:(state)=>{
            state.user = null;
            state.isAuthenticated = false,
            state.isLoading = false
        }

    }
})

export const {createUser,logout} = authSlice.actions;

export default authSlice.reducer;