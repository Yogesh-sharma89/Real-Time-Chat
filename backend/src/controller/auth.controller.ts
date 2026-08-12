import asyncHandler from "../middleware/asyncHandler";
import UserModel from "../models/user.model";
import { welcomeEmail } from "../templates/email/WelcomeEmail";
import AppError from "../utils/appError";
import { CheckPassword } from "../utils/checkPassword";
import sendEmail from "../utils/emailHandler";
import { GenerateToken } from "../utils/jwtToken";
import { LoginSchema, SignupSchema } from "../validations/auth";



export const Signup = asyncHandler(async (req, res) => {

    const validationData = SignupSchema.safeParse(req.body);

    if (!validationData.success) {
        throw new AppError("Invalid credentials", 400);
    }

    const { firstname, lastname, email, password } = validationData.data;

    const user = await UserModel.findOne({ email });

    if (user) {
        throw new AppError("User already exists", 409);
    }

    //if not exists tehn create user 

    const newUser = await UserModel.create({
        firstname,
        lastname,
        email,
        password
    });

    // generate token and send into cookies 

    const payload = newUser._id.toString();

    const token = GenerateToken(payload);


    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict"
    })

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: newUser
    })

    setImmediate(async()=>{
       try{

        await sendEmail({
            to:newUser.email,
            subject:"Welcome to Chit-Chat",
            html:welcomeEmail({
                name:`${newUser.firstname} ${newUser.lastname}`,
                appName:"Chit-Chat",
                dashboardLink:`${process.env.CLIENT_URL}/dashboard`
            })
        })
        

       }catch(err:any){
         console.error("❌ Background email failed")

       }
    })

})

export const Login = asyncHandler(async (req, res) => {

    const validatedData = LoginSchema.safeParse(req.body);

    if(!validatedData.success){
         throw new AppError("Invalid credentials", 400);
    }

    const {email,password} = validatedData.data;

    //check user 
    const existingUser = await UserModel.findOne({email}).select("+password");

    if(!existingUser){
        throw new AppError("Invalid Email or password",401);
    }

    await CheckPassword(password,existingUser.password); //it check the password and throw if any error

    //Control comes here means email and password are correct

    //generate token and sent to cookies and return response

    const token = GenerateToken(existingUser._id.toString());

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        maxAge:7*24*60*60*1000,
        sameSite:"strict"
    })

    const existingUserObj = existingUser.toObject();

    res.status(200).json({
        success:true,
        message:"Logged in successfull",
        user:{
            ...existingUserObj,password:undefined
        }
    })

})

export const Logout = asyncHandler(async (_req, res) => {

    res.clearCookie("token");

     res.status(200).json({
        success: true,
        message: "Logout successfully"
    })


})

export const GetCurrentUser = asyncHandler(async(req,res)=>{

    const userId = req.userId;

    //get the user ;
    const user = await UserModel.findById(userId);

    if(!user){
        throw new AppError("User not found",404);
    }

    res.status(200).json({
        success:true,
        message:"Current user got successfully",
        user
    })

})

export const FrogotPassword = asyncHandler(async (req, res) => {

})

export const ResetPassword = asyncHandler(async (req, res) => {

})

