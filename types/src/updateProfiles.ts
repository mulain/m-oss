import { z } from 'zod'
import {
  emailSchema,
  passwordSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
  addressSchema,
  dateOfBirthSchema,
  genderSchema,
  specializationSchema,
} from './validationBasic'
import { optionalInput, stripUndefined } from './utils'

// Update Identity Fields

export const updateIdentitySchema = z.object({
  email: optionalInput(emailSchema),
  password: optionalInput(passwordSchema),
  firstName: optionalInput(firstNameSchema),
  lastName: optionalInput(lastNameSchema),
  dateOfBirth: optionalInput(dateOfBirthSchema),
  gender: optionalInput(genderSchema),
})

export type UpdateIdentityDTO = z.infer<typeof updateIdentitySchema>
export const cleanedUpdateIdentitySchema = stripUndefined(updateIdentitySchema)

// Update Contact Fields

export const updateContactSchema = z.object({
  phoneNumber: optionalInput(phoneNumberSchema),
  address: optionalInput(addressSchema),
})

export type UpdateContactDTO = z.infer<typeof updateContactSchema>
export const cleanedUpdateContactSchema = stripUndefined(updateContactSchema)

// Update Doctor Fields

export const updateDoctorSchema = z
  .object({
    specialization: optionalInput(specializationSchema),
    active: z.boolean(),
  })
  .partial()

export type UpdateDoctorDTO = z.infer<typeof updateDoctorSchema>
export const cleanedUpdateDoctorSchema = stripUndefined(updateDoctorSchema)

// Combined DTO for Admin Doctor Editing

export const updateProfileDoctorSchema = z.object({
  identity: updateIdentitySchema.partial(),
  contact: updateContactSchema.partial(),
  doctor: updateDoctorSchema.partial(),
})

export type UpdateProfileDoctorDTO = z.infer<typeof updateProfileDoctorSchema>
export const cleanedUpdateProfileDoctorSchema = stripUndefined(updateProfileDoctorSchema)

// Combined DTO for Admin Patient Editing

export const updateProfilePatientSchema = z.object({
  identity: updateIdentitySchema.partial(),
  contact: updateContactSchema.partial(),
})

export type UpdateProfilePatientDTO = z.infer<typeof updateProfilePatientSchema>
export const cleanedUpdateProfilePatientSchema = stripUndefined(updateProfilePatientSchema)
