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
  phoneNumber: optionalInput(phoneNumberSchema),
  address: optionalInput(addressSchema),
  dateOfBirth: optionalInput(dateOfBirthSchema),
  gender: optionalInput(genderSchema),
})

export type UpdateIdentityDTO = z.infer<typeof updateIdentitySchema>
export const cleanedUpdateIdentitySchema = updateIdentitySchema.pipe(stripUndefined)

// Update Contact Fields

export const updateContactSchema = z.object({
  phoneNumber: optionalInput(phoneNumberSchema),
  address: optionalInput(addressSchema),
})

export type UpdateContactDTO = z.infer<typeof updateContactSchema>
export const cleanedUpdateContactSchema = updateContactSchema.pipe(stripUndefined)

// Update Doctor Fields

export const updateDoctorSchema = z
  .object({
    specialization: optionalInput(specializationSchema),
    active: z.boolean(),
  })
  .partial()

export type UpdateDoctorDTO = z.infer<typeof updateDoctorSchema>
export const cleanedUpdateDoctorSchema = updateDoctorSchema.pipe(stripUndefined)
