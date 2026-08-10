import * as z from "zod";

export const SignupSchema = z.object({
    firstname: z.string().trim().min(3, "Firstname should be at least 3 character long")
        .max(20, "Firstame should not exceed 20 characters"),

    lastname: z.string().trim().min(3, "Lastname should be at least 3 character long")
        .max(20, "Lastname should not exceed 20 characters"),

    email: z.string().trim().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email"),

    password: z.string().trim().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should contain one lowercase, one uppercase , one number , specail symbol and at least 8 character long")
})

export type SignupInput = z.infer<typeof SignupSchema>;




export const LoginSchema = z.object({

    email: z.string().trim().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email"),

    password: z.string().trim().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should contain one lowercase, one uppercase , one number , specail symbol and at least 8 character long")

})

export type LoginInput = z.infer<typeof LoginSchema>;