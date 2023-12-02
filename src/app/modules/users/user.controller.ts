import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)

    res.status(200).json({
      status: true,
      message: 'Successfully created a user!',
      data: result,
    })
    return result
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUser,
}
