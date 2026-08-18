import { createSlice } from "@reduxjs/toolkit";
import { CheckAuthThunk, LoginThunk, logoutThunk, SignupThunk } from "./auth.thunk";

interface AuthState {
    user: any | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isInitialized:boolean
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isInitialized:false
    } as AuthState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(LoginThunk.fulfilled, (state, action) => {

            state.user = action.payload?.data ?? action.payload ?? null;
            state.isLoading = false;
            state.isAuthenticated = true;

        }).addCase(LoginThunk.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(LoginThunk.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            .addCase(CheckAuthThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(CheckAuthThunk.fulfilled, (state, action) => {
                state.user = action.payload?.data ?? action.payload ?? null;
                state.isLoading = false;
                state.isAuthenticated = true;
                state.isInitialized = true;
            })
            .addCase(CheckAuthThunk.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.isInitialized = false;
            })
            .addCase(SignupThunk.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(SignupThunk.fulfilled,(state,action)=>{
                state.isLoading  = false;
                state.user = action.payload?.data ?? action.payload ?? null;
                state.isAuthenticated = true;
            })
            .addCase(SignupThunk.rejected,(state)=>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logoutThunk.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(logoutThunk.fulfilled,(state)=>{
                state.isLoading  = false;
                state.user = null;
                state.isAuthenticated = false;
            }).addCase(logoutThunk.rejected,(state)=>{
                state.isLoading  = false;
                state.user = null;
                state.isAuthenticated = false;
            })
    }
})


export default authSlice.reducer;