import { Model } from 'mongoose'

// For months type checking
export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

// for academic semester title type checking
export type IAcademicSemesterTitles = 'Autumn' | 'Summer' | 'Fall'
// for academic semester code type checking
export type IAcademicSemesterCodes = '01' | '02' | '03'

export type IAcademicSemester = {
  title: IAcademicSemesterTitles
  year: string
  code: IAcademicSemesterCodes
  startMonth: IAcademicSemesterMonths
  endMonth: IAcademicSemesterMonths
}
export type AcademicSemesterModel = Model<IAcademicSemester>
export type IAcademicSemesterFilters = {
  searchTerm?: string
}
