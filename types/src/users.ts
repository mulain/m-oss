import { z } from 'zod'

export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN'

export const userRoleEnum = z.enum(['PATIENT', 'DOCTOR', 'ADMIN'])

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string | null
  address: string | null
  dateOfBirth: string | null
  gender: string | null
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
  phoneNumber: string | null
  address: string | null
  dateOfBirth: string | null
  gender: string | null
  age: number | null
}
