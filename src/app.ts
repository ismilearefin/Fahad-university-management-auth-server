import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import cookieParser from 'cookie-parser';
// import { generateFacultyId, generateStudentId } from './app/modules/users/user.utils';
// import { generateStudentId } from './app/modules/users/user.utils';

const app: Application = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/', router);

// global error handler
app.use(globalErrorHandler);

//handle NotFound
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

// const academicSemesterT ={
//   code:'01',
//   year: '2015',
// }
// const testId = generateFacultyId();
// console.log(testId);

export default app;
