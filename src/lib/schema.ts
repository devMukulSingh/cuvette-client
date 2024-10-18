import { z } from "zod";


export const signUpSchema = z.object({
    name:z.string({
        required_error:"Name is required"
    }).trim().min(1,{
        message:"Name is required"
    }).max(30,{
        message:"Name must be maximum 30 characters long"
    }),
    phone: z.string({
        required_error: "Phone is required"
    }).trim().min(1,{
        message:"Phone is required"
    }).max(20,{
        message:"Phone should be max 20 numbers long"
    }),
    companyEmail: z.string({
        required_error: "Company email is required"
    }).trim().email().min(1,{
        message:"Company email is required"
    }).max(30,{
        message:"Email must be maximum 30 characters long"
    }),
    companyName: z.string({
        required_error: "Name is required"
    }).trim().min(1, {
        message: "Company name is required"
    }).max(30, {
        message: "Company name must be maximum 30 characters long"
    }),
    employeeSize: z.coerce.number({
        required_error: "Employee size is required",
        invalid_type_error:"Only numbers 1-10 allowed"
    }).min(1,{
        message:"Employee size is required"
    })
})