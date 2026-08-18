import { Router } from "express";
import { GetCurrentUser, Login, Logout, Signup } from "../controller/auth.controller";
import { ProtectRoute } from "../middleware/ProtectRoute";
import ArcjetMiddleware from "../middleware/arcjet.middleware";

const authRouter = Router();

authRouter.use(ArcjetMiddleware); //middleware for secrity and rate-limiting

authRouter.post("/signup",Signup)
authRouter.post("/login",Login)
authRouter.post("/logout",Logout)

//get the current authenticated user
authRouter.get("/me",ProtectRoute,GetCurrentUser)

export default authRouter;

