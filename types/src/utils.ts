import { z } from 'zod'

export const stripUndefined = z
  .any()
  .transform(data => Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== undefined)))
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided',
  })

export const optionalInput = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(
    val => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    schema.optional()
  )
