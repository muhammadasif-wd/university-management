import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validation'
import { AcademicDepartmentController } from './academicDepartment.controller'

const router = express.Router()

router.post(
  '/create',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
)
router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment)
router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
)
// router.delete('/:id', academicFacultyController.deleteAcademicFaculty)
router.get('/', AcademicDepartmentController.getAllAcademicDepartments)

export const AcademicDepartmentRoutes = router
