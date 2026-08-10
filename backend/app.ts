import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { morganMiddleware } from "./src/middleware/morgan.middleware.js";
import GlobalErrorHandler from "./src/middleware/errorHandler.js";
import ConnectToDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.route.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//morgan middleware 
app.use(morganMiddleware);


//app routes 
app.use("/api/auth", authRouter);


//gloabl error handler
app.use(GlobalErrorHandler);


app.get("/", (req, res) => {
    res.json({ message: "Server is up and running properly" })
})


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




