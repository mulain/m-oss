import { z } from 'zod'
import { Gender } from './validationBasic'

export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN'

export const userRoleEnum = z.enum(['PATIENT', 'DOCTOR', 'ADMIN'])

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  dateOfBirth: string | null
  gender: Gender | null
  phoneNumber: string | null
  address: string | null
  isEmailVerified: boolean
  role: UserRole
}

export interface Doctor {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string | null
  address: string | null
  specialization: string | null
  active: boolean
}

export interface DoctorFull extends Doctor {
  dateOfBirth: string | null
  gender: Gender | null
}

export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  dateOfBirth: string | null
  gender: Gender | null
  phoneNumber: string | null
  address: string | null
  age: number | null
}
