import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyValidation } from './academicFaculty.validation'
import { academicFacultyController } from './academicFaculty.controller'

const router = express.Router()

router.post(
  '/create',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  academicFacultyController.createAcademicFaculty,
)
router.get('/:id', academicFacultyController.getSingleAcademicFaculty)
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  academicFacultyController.updateAcademicFaculty,
)
router.delete('/:id', academicFacultyController.deleteAcademicFaculty)
router.get('/', academicFacultyController.getAllAcademicFaculty)

export const AcademicFacultyRoutes = router
