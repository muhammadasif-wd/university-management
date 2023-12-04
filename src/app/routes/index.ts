import express from 'express'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { UserRoutes } from '../modules/users/user.route'
const router = express.Router()

const moduleRoutes = [
  { path: '/users', route: UserRoutes },
  { path: '/academic-semester', route: AcademicSemesterRoutes },
]

moduleRoutes.forEach(({ path, route }) => router.use(path, route))

export default router
