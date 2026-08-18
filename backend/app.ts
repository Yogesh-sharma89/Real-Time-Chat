import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { morganMiddleware } from "./src/middleware/morgan.middleware.js";
import GlobalErrorHandler from "./src/middleware/errorHandler.js";
import ConnectToDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";
import messageRouter from "./src/routes/message.route.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:[process.env.CLIENT_URL!],
    allowedHeaders:['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE"],
    maxAge:600 //10 minutes
}));
app.use(cookieParser());

//morgan middleware 
app.use(morganMiddleware);


//app routes 
app.use("/api/auth", authRouter);
app.use("/api/user",userRouter);
app.use("/api/message",messageRouter)


app.get("/", (req, res) => {
    res.json({ message: "Server is up and running properly" })
})

console.log("port",port);
console.log("test route is registered")

app.get("/test", (req, res) => {
    console.log("test route hit")
    res.json({ message: "testing rate limit and security" })
})


//gloabl error handler
app.use(GlobalErrorHandler);



const InitializeConnection = async () => {
    try {

        await ConnectToDB();

        app.listen(port, () => {
            console.log(`Server is listening at port ${port}`);
        })

    } catch (err: any) {
        console.log("Error in main server file : ", err.message)
    }
}

InitializeConnection();




