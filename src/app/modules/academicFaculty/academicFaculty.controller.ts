import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { paginationFields } from '../../../constants/pagination';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const result = await AcademicFacultyService.createFaculty(
    academicFacultyData
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Faculties retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
};
