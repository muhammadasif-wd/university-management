import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...userData } = req.body
    const result = await UserService.createUser(userData)

    // send response
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Successfully created a user!',
      data: result,
    })
    next()
  },
)

export const UserController = {
  createUser,
}
