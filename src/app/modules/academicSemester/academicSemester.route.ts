import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { academicSemesterController } from './AcademicSemester.controller'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createAcademicSemester,
)

export const AcademicSemesterRoutes = router
