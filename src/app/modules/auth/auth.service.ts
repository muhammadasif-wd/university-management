import ApiError from '../../../errors/ApiError'
import { Auth } from './auth.model'
import { TAuth } from './auth.type'
import bcrypt from 'bcryptjs'

const createUser = async (user: TAuth): Promise<TAuth | null> => {
  const hashedPassword = await bcrypt.hash(user.password, 10)
  const userInfo = { ...user, password: hashedPassword }
  const createdUser = await Auth.create(userInfo)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create a user!😓')
  }
  return createdUser
}
export const UserService = {
  createUser,
}
