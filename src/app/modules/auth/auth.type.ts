import { Model } from 'mongoose'

export type TAuth = {
  name: string
  email: string
  phone: number
  role: string
  password: string
  status: string
}
export type AuthModel = Model<TAuth, Record<string, unknown>>
