import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(1, {
      message: "Name is required",
    })
    .max(30, {
      message: "Name must be maximum 30 characters long",
    }),
  phone: z
    .string({
      required_error: "Phone is required",
    })
    .trim()
    .min(1, {
      message: "Phone is required",
    })
    .max(20, {
      message: "Phone should be max 20 numbers long",
    }),
  companyEmail: z
    .string({
      required_error: "Company email is required",
    })
    .trim()
    .email()
    .min(1, {
      message: "Company email is required",
    })
    .max(30, {
      message: "Email must be maximum 30 characters long",
    }),
  companyName: z
    .string({
      required_error: "Name is required",
    })
    .trim()
    .min(1, {
      message: "Company name is required",
    })
    .max(30, {
      message: "Company name must be maximum 30 characters long",
    }),
  employeeSize: z.coerce
    .number({
      required_error: "Employee size is required",
      invalid_type_error: "Only numbers 1-10 allowed",
    })
    .min(1, {
      message: "Employee size is required",
    }),
});

export const verifyEmailOtpSchema = z.object({
  emailOtp: z.coerce
    .number({
      required_error: "Email otp is required",
      invalid_type_error: "Only numbers 1-10 allowed",
    })
    .refine((otp) => otp.toString().trim().length === 4, {
      message: "Otp must be 4 numbers long",
    }),
});
export const verifyPhoneOtpSchema = z.object({
  phoneOtp: z.coerce
    .number({
      required_error: "Mobile otp is required",
      invalid_type_error: "Only numbers 1-10 allowed",
    })
    .refine((otp) => otp.toString().trim().length === 4, {
      message: "Otp must be 4 numbers long",
    }),
});

export const jobPostSchema = z.object({
  jobTitle: z
    .string({
      required_error: "Job title is required",
    })
    .trim()
    .min(1, {
      message: "Job title is required",
    })
    .max(30, {
      message: "Job title must be max 30 characters long",
    }),
  jobDescription: z
    .string({
      required_error: "Job description is required",
    })
    .trim()
    .min(1, {
      message: "Job description is required",
    })
    .max(30, {
      message: "Job description must be max 200 characters long",
    }),
  experienceLevel: z
    .string({
      required_error: "Experience level is required",
    })
    .trim()
    .min(1, {
      message: "Experience level is required",
    }),
  candidates: z
    .string({
      required_error: "candidates are requried",
      invalid_type_error: "Only array of emails are allowed",
    })
    .trim()
    .email()
    .array(),
  endDate: z.date({
    required_error: "End date is required",
    invalid_type_error: "Only date is allowed",
  }),
});
