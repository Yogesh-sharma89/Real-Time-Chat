import mongoose, { model } from "mongoose";
import validator from "validator";
import type {RegisterSchema} from "../../types/schema/auth/Signup";
import bcrypt  from 'bcrypt'

const userSchema = new mongoose.Schema<RegisterSchema>({

    firstname: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "Firstname should be at least 3 characters"],
        maxLength: [20, "Firstname should not exceed 20 characters"]
    },
    lastname: {
        type: String,
        trim: true,
        minLength: [3, "Lastname should be at least 3 characters"],
        maxLength: [20, "Lastname should not exceed 20 characters"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        validate:()=>{
            validator:(value:string)=> validator.isEmail(value)
            message:"Please Provide a valid email address"
        }
    },

    password:{
        type:String,
        required:true,
        trim:true,
        select:false
    },
    profilePicture:{
        type:String,
        trim:true,
        default:""
    },
    profilePictureId:{type:String},

    isDeleted:{
        type:Boolean,
        default:false
    },
    authType:{
        type:String,
        enum:{
            values:['local','social'],
            message:"Invalid auth mode"
        }
    }

}, {
    timestamps: true
})

userSchema.pre("save",async function(){

    if(!this.isModified('password')){
        return;
    }

    try{
        const hashedPassword = await bcrypt.hash(this.password,10);

        this.password = hashedPassword;

    }catch(err:any){
       console.log(`Password hashing failed : ${err.message}`)
    }

})

const UserModel = model<RegisterSchema>("user", userSchema);

export default UserModel;