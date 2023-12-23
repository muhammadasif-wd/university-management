import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validation'
import { academicDepartmentController } from './academicDepartment.controller'

const router = express.Router()

router.post(
  '/create',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidation,
  ),
  academicDepartmentController.createAcademicDepartment,
)
// router.get('/:id', academicFacultyController.getSingleAcademicFaculty)
// router.patch(
//   '/:id',
//   validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
//   academicFacultyController.updateAcademicFaculty,
// )
// router.delete('/:id', academicFacultyController.deleteAcademicFaculty)
// router.get('/', academicFacultyController.getAllAcademicFaculty)

export const AcademicDepartmentRoutes = router
