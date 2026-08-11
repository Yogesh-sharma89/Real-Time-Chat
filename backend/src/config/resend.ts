import { Resend } from "resend";
import "dotenv/config";

const resend_api_key = process.env.RESEND_API_KEY;

const resend = new Resend(resend_api_key);

export default resend;