import { z } from 'zod'

export const stripUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  schema
    .transform(obj =>
      Object.fromEntries(
        Object.entries(obj as Record<string, unknown>).filter(([_, v]) => v !== undefined)
      )
    )
    .refine(obj => Object.keys(obj).length > 0, {
      message: 'At least one field must be provided',
    }) as unknown as z.ZodEffects<T, z.infer<T>, z.input<T>>

export const optionalInput = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess(
    val => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    schema.optional()
  )
