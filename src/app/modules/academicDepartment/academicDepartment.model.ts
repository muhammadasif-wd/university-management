import { Schema, model } from 'mongoose'
import {
  AcademicDepartmentModel,
  IAcademicDepartment,
} from './academicDepartment.interface'

const academicDepartmentSchema = new Schema<
  IAcademicDepartment,
  AcademicDepartmentModel
>(
  {
    title: {
      type: String,
      required: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'academicFaculty',
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

export const academicDepartment = model<
  IAcademicDepartment,
  AcademicDepartmentModel
>('academicDepartment', academicDepartmentSchema)
