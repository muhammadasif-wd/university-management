import { SortOrder } from 'mongoose'
import { paginationHelper } from '../../../helpers/paginationHelper'
import { IGenericResponse } from '../../interfaces/common'
import { IPaginationOptions } from '../../interfaces/pagination'
import { academicFacultySearchableFields } from './academicFaculty.constant'
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'

const createAcademicFaculty = async (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload)
  return result
}
const getAllAcademicFaculty = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, sortBy, sortOrder, skip } =
    paginationHelper.calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}
  const result = await AcademicFaculty.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await AcademicFaculty.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const getSingleAcademicFaculty = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById({ _id: id })
  return result
}
const updateAcademicFaculty = async (
  id: string,
  payload: Partial<IAcademicFaculty>,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}
const deleteAcademicFaculty = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndDelete({ _id: id })
  return result
}
export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
}
