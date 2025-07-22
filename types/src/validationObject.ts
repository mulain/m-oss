import { z } from 'zod'

import {
  emailSchema,
  passwordSchema,
  firstNameSchema,
  lastNameSchema,
  specializationSchema,
  utcDateSchema,
  uuidSchema,
  urlSchema,
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

// Email Payload (used for forgot password, resend verification)

export const emailPayloadSchema = z.object({
  email: emailSchema,
})

export type EmailPayloadDTO = z.infer<typeof emailPayloadSchema>

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

// Video Call

export const videoCallProviderSchema = z.enum(['zoom', 'teams', 'google_meet', 'jitsi', 'other'])
export type VideoCallProvider = z.infer<typeof videoCallProviderSchema>

export const videoCallSchema = z.object({
  url: urlSchema.optional().nullable(),
  provider: videoCallProviderSchema.optional().nullable(),
  password: z.string().optional().nullable(),
})

export type VideoCallDTO = z.infer<typeof videoCallSchema>

// Edit Slot Doctor

export const editSlotDoctorSchema = z.object({
  startTime: utcDateSchema.optional(),
  endTime: utcDateSchema.optional(),
  videoCall: videoCallSchema.optional().nullable(),
  doctorNotes: z.string().optional().nullable(),
})

export type EditSlotDoctorDTO = z.infer<typeof editSlotDoctorSchema>

// Edit Slot Patient

export const editSlotPatientSchema = z.object({
  reason: z.string().optional().nullable(),
  patientNotes: z.string().optional().nullable(),
})

export type EditSlotPatientDTO = z.infer<typeof editSlotPatientSchema>

// Edit Slot Admin

export const editSlotAdminSchema = z.object({
  startTime: utcDateSchema.optional(),
  endTime: utcDateSchema.optional(),
  videoCall: videoCallSchema.optional().nullable(),
  reason: z.string().optional().nullable(),
  reservedUntil: utcDateSchema.optional().nullable(),
})

export type EditSlotAdminDTO = z.infer<typeof editSlotAdminSchema>
