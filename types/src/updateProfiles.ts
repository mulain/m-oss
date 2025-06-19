import { z } from 'zod'
import { doctorsEditableSchema, usersEditableSchema } from './editableTableFields'

// Combined DTOs for updating profiles

/**
 * Update Patient-Profile
 *
 * Used by patient-users for updating their profile.
 */
export const updateProfilePatientSchema = z.object({
  user: usersEditableSchema.partial(),
})

export type UpdateProfilePatientDTO = z.infer<typeof updateProfilePatientSchema>

/**
 * Update Doctor-Profile
 *
 * Used by doctor-users for updating their profile.
 */
export const updateProfileDoctorSchema = z.object({
  user: usersEditableSchema.partial(),
  doctor: doctorsEditableSchema.partial(),
})

export type UpdateProfileDoctorDTO = z.infer<typeof updateProfileDoctorSchema>
