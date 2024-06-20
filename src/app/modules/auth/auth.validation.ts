import { z } from 'zod'
import { EStatus, EUserRole } from './auth.enum'

const createUserZodSchema = z.object({
  body: z
    .object({
      name: z.string().nonempty('name is required'),
      email: z
        .string()
        .nonempty('email is required')
        .email()
        .refine(value => value.includes('@'), {
          message: 'email should be a valid email',
        }),
      phone: z
        .number()
        .int()
        .refine(value => !isNaN(value), 'phone is required'),
      role: z.nativeEnum(EUserRole),
      password: z
        .string()
        .nonempty('password is required')
        .min(8, {
          message: 'password should be at least 8 characters',
        })
        .max(32, {
          message: 'password should not exceed 32 characters',
        }),
      status: z.nativeEnum(EStatus),
    })
    .strict(),
})

export const UserValidation = {
  createUserZodSchema,
}
