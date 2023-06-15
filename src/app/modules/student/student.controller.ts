import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

import { studentFilterableFields } from './student.constant';
import { IStudent } from './student.interface';
import { StudentService } from './student.service';

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await StudentService.getAllStudent(filters, paginationOptions);

  sendResponse<IStudent[]>(res, {
    success: true,
    message: 'Student retrieved successfully',
    statusCode: 200,
    meta: result.meta,
    data: result.data,
  });
});

const getsingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student retrieved successfully',
    statusCode: 200,
    data: result,
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.updatedStudent(id, updatedData);

  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student Uodated successfully',
    statusCode: 200,
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudent(id);

  sendResponse<IStudent>(res, {
    success: true,
    message: 'Student deleted successfully',
    statusCode: 200,
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getsingleStudent,
  updateStudent,
  deleteStudent,
};
