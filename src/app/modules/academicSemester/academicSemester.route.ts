import express from 'express';
// import { UserController } from './user.controler';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(AcademicSemesterValidation.createAcademicZodSchema)
  //   UserController.createUser
);

export const UserRoutes = router;
