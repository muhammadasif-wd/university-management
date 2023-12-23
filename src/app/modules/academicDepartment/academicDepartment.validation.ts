import { z } from 'zod'

const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Academic Department title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
    }),
  }),
})
const updateAcademicDepartmentZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Academic Department title is required',
      })
      .optional(),
    academicFaculty: z
      .string({
        required_error: 'Academic Faculty is required',
      })
      .optional(),
  }),
})

export const AcademicDepartmentValidation = {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
}
