import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterFilterableFields } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterService } from './academicSemester.service'

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemester } = req.body
    const result =
      await AcademicSemesterService.createSemester(academicSemester)

    // send response
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    })
  },
)

const getAllAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicSemesterFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)
    const result = await AcademicSemesterService.getAllSemester(
      filters,
      paginationOptions,
    )

    // send response
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semesters fetched successfully',
      meta: result.meta,
      data: result.data,
    })
  },
)

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AcademicSemesterService.getSingleSemester(id)

    // send response
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester fetched successfully',
      data: result,
    })
  },
)

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedData = req.body

    const result = await AcademicSemesterService.updateAcademicSemester(
      id,
      updatedData,
    )

    // send response
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester updated successfully',
      data: result,
    })
  },
)
const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AcademicSemesterService.deleteAcademicSemester(id)

    // send response
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester deleted successfully',
      data: result,
    })
  },
)
export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
}
