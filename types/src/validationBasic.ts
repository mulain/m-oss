import { z } from 'zod'
import { isBefore, parseISO, subYears, isValid } from 'date-fns'

// basic schemas
export const uuidSchema = z.string().uuid({ message: 'Must be a valid UUID' })

export const utcDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, {
    message: 'Must be a valid ISO datetime string in UTC (e.g. 2025-05-28T10:00:00Z)',
  })
  .refine(val => !isNaN(Date.parse(val)), { message: 'Must be a valid date' })
  .transform(val => new Date(val))

export const emailSchema = z
  .string()
  .email('Invalid email address')
  .transform(val => val.trim().toLowerCase())

export const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters')
  .max(100, 'Password is too long')

export const firstNameSchema = z.string().min(2, 'First name must be at least 2 characters')

export const lastNameSchema = z.string().min(2, 'Last name must be at least 2 characters')

export const dateOfBirthSchema = z
  .string()
  .refine(val => isValid(parseISO(val)), {
    message: 'Must be a valid date in YYYY-MM-DD format',
  })
  .refine(val => isBefore(parseISO(val), new Date()), {
    message: 'Date must be in the past',
  })
  .refine(val => isBefore(parseISO(val), subYears(new Date(), 18)), {
    message: 'You must be at least 18 years old',
  })

export const phoneNumberSchema = z
  .string()
  .trim()
  .min(2, 'Phone number must be at least 2 characters')
  .or(z.literal('').transform(() => undefined))

export const addressSchema = z
  .string()
  .trim()
  .min(2, 'Address must be at least 2 characters')
  .or(z.literal('').transform(() => undefined))

export const specializationSchema = z
  .string()
  .trim()
  .min(2, 'Specialization must be at least 2 characters')
  .or(z.literal('').transform(() => undefined))

export const genderSchema = z.enum(['MALE', 'FEMALE', 'NON_BINARY', 'OTHER', 'PREFER_NOT_TO_SAY'], {
  message: 'Invalid gender input',
})
