import express, { Response, Request, Application } from 'express'
import cors from 'cors'
const app: Application = express()
import userRoute from '../src/app/modules/users/user.route'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//applications route
app.use('/api/v1/users/', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
