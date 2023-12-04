import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

//? call express
const app: Application = express()

//? using cors
app.use(cors())

//? parse data
app.use(express.json()) //json data
app.use(express.urlencoded({ extended: true })) //accept data url or json

//? Calling Routes
app.use('/api/v1', routes)
app.get('/', (req: Request, res: Response) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">Welcome to server</h1>`,
  )
})
app.use(globalErrorHandler)

//? handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})

export default app
