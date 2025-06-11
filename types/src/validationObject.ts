import { z } from 'zod'

import {
  emailSchema,
  passwordSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
  addressSchema,
  specializationSchema,
  utcDateSchema,
  uuidSchema,
  genderSchema,
  dateOfBirthSchema,
} from './validationBasic'

// Login

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type LoginDTO = z.infer<typeof loginSchema>

// Register Patient Frontend Form

export const registerPatientFormSchema = z
  .object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export type RegisterPatientFormDTO = z.infer<typeof registerPatientFormSchema>

// Register Patient Backend DTO

export const registerPatientSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  password: passwordSchema,
})

export type RegisterPatientDTO = z.infer<typeof registerPatientSchema>

// Create Doctor

export const createDoctorSchema = z.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  email: emailSchema,
  specialization: specializationSchema.optional().nullable(),
})

export type CreateDoctorDTO = z.infer<typeof createDoctorSchema>

// Edit Doctor

export const editDoctorSchema = z
  .object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    specialization: specializationSchema,
    active: z.boolean(),
    phoneNumber: phoneNumberSchema.optional().nullable(),
    address: addressSchema.optional().nullable(),
  })
  .partial()

export type EditDoctorDTO = z.infer<typeof editDoctorSchema>

// Create Appointment Slots

export const createSlotsSchema = z.object({
  slots: z
    .array(
      z.object({
        startTime: utcDateSchema,
        endTime: utcDateSchema,
      })
    )
    .min(1, 'At least one slot must be provided'),
})

export type CreateSlotsDTO = z.infer<typeof createSlotsSchema>

// Forgot Password

export const forgotPasswordSchema = z.object({
  email: emailSchema,
})

export type ForgotPasswordDTO = z.infer<typeof forgotPasswordSchema>

// Doctor Time Range
// e.g. get slots for a doctor between two dates

export const doctorTimeRangeSchema = z.object({
  doctorId: uuidSchema,
  after: utcDateSchema,
  before: utcDateSchema,
})

export type DoctorTimeRangeDTO = z.infer<typeof doctorTimeRangeSchema>

// Time Range Query

export const timeRangeSchema = z.object({
  after: utcDateSchema,
  before: utcDateSchema,
})

export type TimeRangeDTO = z.infer<typeof timeRangeSchema>

// Reset Password

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: passwordSchema,
})

export type ResetPasswordDTO = z.infer<typeof resetPasswordSchema>

// Update Profile

export const updateProfileSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    phoneNumber: phoneNumberSchema,
    address: addressSchema,
    dateOfBirth: dateOfBirthSchema,
    gender: genderSchema,
    specialization: specializationSchema,
  })
  .partial()

export type UpdateProfileDTO = z.infer<typeof updateProfileSchema>
