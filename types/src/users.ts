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
  phoneNumber?: string
  address?: string
  specialization?: string
  active: boolean
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
