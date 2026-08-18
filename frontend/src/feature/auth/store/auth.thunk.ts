import { createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../api/login";
import type { LoginFormData, SignupFormData } from "../schema/auth.schema";
import checkAuthApi from "../api/checkAuth";
import SignupApi from "../api/signup";
import logoutApi from "../api/logout";

export const LoginThunk = createAsyncThunk(
    "auth/login",

    async (credentials: LoginFormData, thunkApi) => {
        try {

            const res = await loginApi(credentials);

            return res;

        } catch (err: any) {
            return thunkApi.rejectWithValue({
                message: err.message || "Something went wrong",
                status: err.status,
                code: err.code,
                errors: err.errors
            });
        }
    }
)


export const SignupThunk = createAsyncThunk(
    "auth/signup",
    async (credentials: SignupFormData, thunkApi) => {

        try {
            const res = await SignupApi(credentials);
            return res;

        } catch (err: any) {
            return thunkApi.rejectWithValue({
                message: err.message || "Something went wrong",
                status: err.status,
                code: err.code,
                errors: err.errors
            });
        }
    }
)

export const CheckAuthThunk = createAsyncThunk(
    "auth/checkAuth",
    async (_credentials, thunkApi) => {
        try {

            const res = await checkAuthApi();

            return res;

        } catch (err: any) {
            return thunkApi.rejectWithValue({
                message: err.message || "Something went wrong",
                status: err.status,
                code: err.code,
                errors: err.errors
            });
        }
    }
)

export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_credentials, thunkApi) => {
        try {
            const res = await logoutApi();
            return res;

        } catch (err:any) {
           return thunkApi.rejectWithValue({
                message: err.message || "Something went wrong",
                status: err.status,
                code: err.code,
                errors: err.errors
            });
        }
    }
)

