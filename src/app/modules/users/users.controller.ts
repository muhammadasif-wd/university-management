import { Request, Response } from 'express'
import userService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)

    if (result) {
      res.status(200).json({
        status: true,
        message: 'Successfully created a user!',
        data: result,
      })
      return result
    } else {
      res.status(500).json({
        status: false,
        message: 'Something went wrong! Internal server error',
      })
    }
  } catch (err) {
    console.error('Error creating user:', err)
    res.status(400).json({
      status: false,
      message: 'Failed to create a user!',
    })
  }
}

export default {
  createUser,
}
