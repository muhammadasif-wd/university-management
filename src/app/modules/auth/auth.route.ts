import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './auth.controller'
import { UserValidation } from './auth.validation'
const router = express.Router()

router.post(
  '/sign-up',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
)

export const UserRoutes = router
