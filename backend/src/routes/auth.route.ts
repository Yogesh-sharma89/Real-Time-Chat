import { Router } from "express";
import { GetCurrentUser, Login, Logout, Signup } from "../controller/auth.controller";
import { ProtectRoute } from "../middleware/ProtectRoute";

const authRouter = Router();

authRouter.post("/signup",Signup)
authRouter.post("/login",Login)
authRouter.post("/logout",ProtectRoute,Logout)

//get the current authenticated user
authRouter.get("/me",ProtectRoute,GetCurrentUser)

export default authRouter;

