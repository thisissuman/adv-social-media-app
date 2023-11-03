import * as z from "zod";
export const SignupValidationSchema = z.object({
    username: z.string().min(2, {
      message: "Too short",
    }),
    name: z.string().min(2, {
      message: "Too short",
    }),
    email: z.string().min(2, {
      message: "Too short",
    }),
    password: z.string().min(8, {
      message: "password must be 8 characters",
    }),
  });