import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //? Auto generated incremental id
  const id = await generateUserId()
  // replace data id
  user.id = id as string

  //? Default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create a user!😓')
  }
  return createdUser
}
export const UserService = {
  createUser,
}
