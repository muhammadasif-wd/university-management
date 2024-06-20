import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './auth.service'
import { RESPONSE_MESSAGES } from './auth.constant'
import httpStatus from 'http-status'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const result = await UserService.createUser(userData)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: RESPONSE_MESSAGES.USER_CREATED,
    data: result,
  })
})

export const UserController = {
  createUser,
}
