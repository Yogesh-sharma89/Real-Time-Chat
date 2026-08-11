import { Router } from "express";
import { ProtectRoute } from "../middleware/ProtectRoute";
import { UpdateProfile } from "../controller/user.controller";
import { upload } from "../middleware/multer";

const userRouter = Router();

userRouter.use(ProtectRoute);

userRouter.put("/update-profile",upload.single("profilePicture"),UpdateProfile);

export default userRouter;