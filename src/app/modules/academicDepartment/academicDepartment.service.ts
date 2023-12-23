import { IAcademicDepartment } from './academicDepartment.interface'
import { academicDepartment } from './academicDepartment.model'

const createAcademicDepartment = async (
  payload: IAcademicDepartment,
): Promise<IAcademicDepartment> => {
  const result = (await academicDepartment.create(payload)).populate(
    'academicFaculty',
  )
  return result
}

export const academicDepartmentService = {
  createAcademicDepartment,
}
