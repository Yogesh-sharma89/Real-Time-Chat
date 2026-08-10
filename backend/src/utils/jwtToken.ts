import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "./appError.ts";

const jwt_key = process.env.JWT_SECRET;

interface JwtPayload{
    userId:string;
}


export const GenerateToken = (userId: string) => {

    if (!jwt_key) {
        throw new AppError("Jwt secret is missing", 500);
    }

    const token = jwt.sign({ userId }, jwt_key, {
        expiresIn: "7d",
        subject: userId,
        audience: "my-app-users"
    })

    return token;

}

export const VerifyToken = (token: string) => {

    if (!jwt_key) {
        throw new AppError("Jwt secret is missing", 500);
    }

    const decoded = jwt.verify(token, jwt_key) as JwtPayload;

    return decoded.userId;

}