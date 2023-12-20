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
// router.get('/:id', academicSemesterController.getSingleAcademicSemester)
// router.patch(
//   '/:id',
//   validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
//   academicSemesterController.updateAcademicSemester,
// )
// router.delete('/:id', academicSemesterController.deleteAcademicSemester)
router.get('/', academicFacultyController.getAllAcademicFaculty)

export const AcademicFacultyRoutes = router
