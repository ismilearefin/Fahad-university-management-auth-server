import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicDepartment } from './academicDepartment.interface';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartment } = req.body;
  const result = await AcademicDepartmentService.createDepartment(
    academicDepartment
  );
  sendResponse<IAcademicDepartment>(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department created successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
};
