import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

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
    throw new Error('Failed to create a user!😓')
  }
  return createdUser
}

export default {
  createUser,
}
