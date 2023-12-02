import express, { Application, Request, Response } from 'express'
import cors from 'cors'

//? call express
const app: Application = express()

//? Application Router
// import userRoutes from "./app/modules/user/user.route"

//? using cors
app.use(cors())

//? parse data
app.use(express.json()) //json data
app.use(express.urlencoded({ extended: true })) //accept data url or json

/*
    * Step for data crud operation
    - 1st Step: Interface Create
    - 2nd Step: Schema Create
    - 3rd Step: Model Create
    - 4th Step: Database Query
*/
/*
    * Pattern for operation
    - Route Call To Controller
    - Controller Call To Service
    - Service Call To Model
    - Model Call To Schema
*/

//? Calling Routes
// app.use("/api/v1/user", userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">Welcome to server</h1>`,
  )
})

export default app
