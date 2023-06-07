import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required',
    }),
    password: z.string().optional(),
  }),
})

//req-validation
//body --> object
//data --> object

export const UserValidation = {
  createUserZodSchema,
}
