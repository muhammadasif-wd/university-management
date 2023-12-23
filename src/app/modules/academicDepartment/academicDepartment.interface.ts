import { Model } from 'mongoose'
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'

export type IAcademicDepartment = {
  title: string
  academicFaculty: string | IAcademicFaculty
}
export type AcademicDepartmentModel = Model<
  AcademicDepartmentModel,
  Record<string, unknown>
>
