import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address"),

    password: z.string().trim()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should contain one lowercase, one uppercase , one number , specail symbol and at least 8 character long")

})

export const SignupSchema = z.object({
    firstname: z.string().trim().min(3, "Firstname should be at least 3 character long")
        .max(20, "Firstame should not exceed 20 characters"),

    lastname: z.string().trim().min(3, "Lastname should be at least 3 character long")
        .max(20, "Lastname should not exceed 20 characters"),

    email: z.string().trim().email("Please enter a valid email address"),

    password: z.string().trim()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should contain one lowercase, one uppercase , one number , specail symbol and at least 8 character long"),

    confirmPassword:z.string().trim().min(8,"Please confirm your password")
}).refine(
    (data)=>data.password === data.confirmPassword,
    {
        message:"Password do not match",
        path:["confirmPassword"]
    }
)

export type LoginFormData = z.infer<typeof loginSchema>;

export type SignupFormData = z.infer<typeof SignupSchema>;