import { z } from 'zod'
import type { Patient } from './users'

export type AppointmentStatus = 'AVAILABLE' | 'RESERVED' | 'BOOKED' | 'EXPIRED'

export const appointmentStatusEnum = z.enum(['AVAILABLE', 'RESERVED', 'BOOKED', 'EXPIRED'])

export interface Slot {
  appointmentId: string
  doctorId: string
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
  createdAt: Date
  updatedAt: Date
}

export interface FrontendSlot {
  appointmentId: string
  startTime: string
  endTime: string
  status: AppointmentStatus
  bookedAt: string | null
  reservedUntil: string | null
}
