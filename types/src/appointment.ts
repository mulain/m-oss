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

export interface VideoCall {
  url: string | null
  provider: string | null
  password: string | null
}

export interface BasicSlot {
  id: string
  startTime: string
  endTime: string
}

export interface PatientSlot extends BasicSlot {
  bookedAt: string | null
  reservedUntil: string | null
  reason: string | null
  patientNotes: string | null
  videoCall: VideoCall | null
  status: AppointmentStatus
  doctor: Doctor
}

export interface DoctorSlot extends PatientSlot {
  doctorNotes: string | null
  patient: Patient | null
}

export interface FullSlot extends DoctorSlot {
  createdAt: Date
  updatedAt: Date
}
