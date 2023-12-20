import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcademicFacultyService } from './AcademicFaculty.service'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'
import { academicFacultyFilterableFields } from './academicFaculty.constant'

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicFacultyFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)
    const result = await AcademicFacultyService.getAllAcademicFaculty(
      filters,
      paginationOptions,
    )

    // send response
    sendResponse<IAcademicFaculty[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty fetched successfully',
      meta: result.meta,
      data: result.data,
    })
  },
)
const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AcademicFacultyService.getSingleAcademicFaculty(id)

    // send response
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty fetched successfully',
      data: result,
    })
  },
)
const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicFaculty } = req.body
    const result =
      await AcademicFacultyService.createAcademicFaculty(academicFaculty)

    // send response
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty title saved successfully.',
      data: result,
    })
  },
)
const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { ...academicFaculty } = req.body
    const result = await AcademicFacultyService.updateAcademicFaculty(
      id,
      academicFaculty,
    )

    // send response
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty updated successfully.',
      data: result,
    })
  },
)
const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AcademicFacultyService.deleteAcademicFaculty(id)

    // send response
    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Faculty deleted successfully.',
      data: result,
    })
  },
)
export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
}
