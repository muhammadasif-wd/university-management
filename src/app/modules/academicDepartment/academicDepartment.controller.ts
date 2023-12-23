import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IAcademicDepartment } from './academicDepartment.interface'
import { academicDepartmentService } from './academicDepartment.service'

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    // get data from request body
    const { ...academicDepartment } = req.body
    // create academic department
    const result =
      await academicDepartmentService.createAcademicDepartment(
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

export const academicDepartmentController = {
  createAcademicDepartment,
}
