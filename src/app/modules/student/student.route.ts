import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';

const router = express.Router();

// step -- > 5

// update student route
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);
router.delete('/:id', StudentController.deleteStudent);
router.get('/:id', StudentController.getsingleStudent);
router.get('/', StudentController.getAllStudent);

export const studentRoutes = router;
