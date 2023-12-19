import { Schema, model } from 'mongoose'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicSemesterModel } from '../academicSemester/academicSemester.interface'

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // for _id to id
    toJSON: {
      virtuals: true,
    },
  },
)

export const AcademicFaculty = model<IAcademicFaculty, AcademicSemesterModel>(
  'academicFaculty',
  academicFacultySchema,
)
