import { Router } from "express";
import { ProtectRoute } from "../middleware/ProtectRoute";
import { GetAllContacts, GetChatPartners, GetMessagesByUserId, SendMessage } from "../controller/message.controller";
import ArcjetMiddleware from "../middleware/arcjet.middleware";
import { upload } from "../middleware/multer";

const messageRouter = Router();

messageRouter.use(ProtectRoute,ArcjetMiddleware);

messageRouter.get("/contacts",GetAllContacts);

messageRouter.get("/chats",GetChatPartners)

messageRouter.get("/chats/:userId",GetMessagesByUserId) //get all message between current and this user

messageRouter.post("/send/:userId",upload.single("file"),SendMessage)


export  default messageRouter;