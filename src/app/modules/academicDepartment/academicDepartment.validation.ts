import { z } from 'zod'

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Academic Department title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
    }),
  }),
})

export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidation,
}
