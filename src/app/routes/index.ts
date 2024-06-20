import express from 'express'
import { UserRoutes } from '../modules/auth/auth.route'
const router = express.Router()

const moduleRoutes = [{ path: '/auth', route: UserRoutes }]

moduleRoutes.forEach(({ path, route }) => router.use(path, route))

export default router
