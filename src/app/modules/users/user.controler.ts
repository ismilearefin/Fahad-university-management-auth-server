import { Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';

// step--> 4

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...userData } = req.body;
  const result = await UserService.createStudent(student, userData);

  sendResponse(res, {
    success: true,
    message: 'User created successfully',
    data: result,
    statusCode: 200,
  });
});

const createFaculy: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { faculty, ...userData } = req.body;
    const result = await UserService.createFaculty(faculty, userData);

    sendResponse<IUser>(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createStudent,
  createFaculy,
};
