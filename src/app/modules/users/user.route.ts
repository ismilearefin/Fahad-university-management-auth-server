import express from 'express';
import { UserController } from './user.controler';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// step -- > 5

// create student route
router.post(
  '/create-student',
  validateRequest(UserValidation.createStudentZodSchema),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculy
);

export const UserRoutes = router;
