import { z } from 'zod'
import type { Patient, Doctor } from './users'

export const appointmentStatusEnum = z.enum([
  'AVAILABLE',
  'RESERVED',
  'BOOKED',
  'EXPIRED',
  'COMPLETED',
])

export type AppointmentStatus = z.infer<typeof appointmentStatusEnum>

export interface Slot {
  appointmentId: string
  startTime: string
  endTime: string
  bookedAt: string | null
  reservedUntil: string | null
  reason: string | null
  patientNotes: string | null
  doctorNotes: string | null
  videoCall: Record<string, unknown> | null
  status: AppointmentStatus
  patient: Patient | null
  doctor: Doctor | null
  createdAt: Date
  updatedAt: Date
}

export interface PatientSlot {
  appointmentId: string
  startTime: string
  endTime: string
  bookedAt: string | null
  reservedUntil: string | null
  reason: string | null
  patientNotes: string | null
  videoCall: Record<string, unknown> | null
  status: AppointmentStatus
  doctor: Doctor
}

export interface DoctorSlot {
  appointmentId: string
  startTime: string
  endTime: string
  bookedAt: string | null
  reservedUntil: string | null
  reason: string | null
  patientNotes: string | null
  doctorNotes: string | null
  videoCall: Record<string, unknown> | null
  status: AppointmentStatus
  patient: Patient | null
}
