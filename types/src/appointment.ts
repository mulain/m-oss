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

export interface BasicSlot {
  id: string
  startTime: string
  endTime: string
}

export interface Slot extends BasicSlot {
  bookedAt: string | null
  reservedUntil: string | null
  reason: string | null
  patientNotes: string | null
  videoCall: Record<string, unknown> | null
  status: AppointmentStatus
  doctor: Doctor
}

export interface DoctorSlot extends Slot {
  doctorNotes: string | null
  patient: Patient | null
}

export interface FullSlot extends DoctorSlot {
  createdAt: Date
  updatedAt: Date
}
