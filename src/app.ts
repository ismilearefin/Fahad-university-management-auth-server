import express, {  Application} from 'express'
import cors from 'cors'
import  { UserRoutes } from '../src/app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import ApiError from './errors/ApiError'


const app: Application = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//applications route
app.use('/api/v1/users/', UserRoutes)



// global error handler
app.use(globalErrorHandler);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello World')
// //   throw new ApiError(400,'Not implemented')
// //   next('Ore baba error') // error

// })
//


export default app
