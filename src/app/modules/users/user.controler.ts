import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);

  sendResponse(res, {
    success: true,
    message: 'User created successfully',
    data: result,
    statusCode: 200,
  });
});

export const UserController = {
  createUser,
};
