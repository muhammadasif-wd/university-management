import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IAcademicDepartment } from './academicDepartment.interface'
import pick from '../../../shared/pick'
import { academicDepartmentFilterableFields } from './academicDepartment.constant'
import { paginationFields } from '../../../constants/pagination'
import { AcademicDepartmentService } from './academicDepartment.service'

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    // get data from request body
    const { ...academicDepartment } = req.body
    // create academic department
    const result =
      await AcademicDepartmentService.createAcademicDepartment(
        academicDepartment,
      )

    //  send response
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department create successfully.',
      data: result,
    })
  },
)
const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)

    const result = await AcademicDepartmentService.getAllAcademicDepartment(
      filters,
      paginationOptions,
    )
    //  send response
    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Departments fetched successfully',
      meta: result.meta,
      data: result.data,
    })
  },
)

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result =
      await AcademicDepartmentService.getSingleAcademicDepartment(id)

    // send response
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Academic Department fetch successfully',
      data: result,
    })
  },
)
const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { ...academicFaculty } = req.body
    const result = await AcademicDepartmentService.updateAcademicDepartment(
      id,
      academicFaculty,
    )

    // send response
    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully.',
      data: result,
    })
  },
)
export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}
