import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from '../src/app/modules/users/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoute } from './app/modules/academicSemester/academicSemester.route';
// import ApiError from './errors/ApiError'

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//applications route
app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoute);

// global error handler
app.use(globalErrorHandler);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     Promise.reject(new Error('Undandlled rejectiong'))
// //   res.send('Hello World')
// //   throw new ApiError(400,'Not implemented')
// //   next('Ore baba error') // error

// })
//

export default app;
