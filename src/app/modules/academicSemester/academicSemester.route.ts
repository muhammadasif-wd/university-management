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

router.get('/:id', academicSemesterController.getSingleAcademicSemester)
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterController.updateAcademicSemester,
)
router.get('/', academicSemesterController.getAllAcademicSemester)

export const AcademicSemesterRoutes = router
