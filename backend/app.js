import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
//morgan middleware 
// app.use(morganMiddleware);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.json({ message: "Server is up and running properly" });
});
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
