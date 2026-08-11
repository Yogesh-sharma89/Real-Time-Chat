import z from "zod";
import { SignupSchema } from "./auth";

export const UpdateProfileSchema = SignupSchema.partial();

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;