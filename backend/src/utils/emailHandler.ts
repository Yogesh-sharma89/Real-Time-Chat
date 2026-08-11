import resend from "../config/resend";
import AppError from "./appError";

interface sendEmailProps{
    to:string,
    subject:string,
    html:string,
}

const sendEmail = async({to,subject,html}:sendEmailProps)=>{

    try{
       
        const {data,error} = await resend.emails.send({
            from:"Acme <onboarding@resend.dev>",
            to,
            subject,
            html
        }) 

        if(error){
            throw new AppError(error.message,500);
        }

        console.log(`Mail sent to :`,data.id);


    }catch(err:any){
        console.log("error in sending mail :",err.message);
        throw new AppError(err.message,503);

    }

}

export default sendEmail;