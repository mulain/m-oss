import { z } from 'zod'
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  phoneNumberSchema,
  addressSchema,
  dateOfBirthSchema,
  genderSchema,
  specializationSchema,
  passwordSchema,
} from './validationBasic'

// Base DTOs for editable fields of tables

/**
 * Users table
 */
export const usersEditableSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  phoneNumber: phoneNumberSchema,
  address: addressSchema,
  dateOfBirth: dateOfBirthSchema,
  gender: genderSchema,
})

export type UsersEditableDTO = z.infer<typeof usersEditableSchema>

/**
 * Doctors table
 */
export const doctorsEditableSchema = z.object({
  specialization: specializationSchema,
  active: z.boolean(),
})

export type DoctorsEditableDTO = z.infer<typeof doctorsEditableSchema>

/**
 * Patients table
 * Doesn't have editable fields yet
 */
