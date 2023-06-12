import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterFilterableFields } from './academicSemester.constant';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse(res, {
      success: true,
      message: 'Academic semester created successfully',
      data: result,
      statusCode: 200,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, academicSemesterFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );

    sendResponse<IAcademicSemester[]>(res, {
      success: true,
      message: 'Semester retrieved successfully',
      statusCode: 200,
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    // console.log(id)
    const result = await AcademicSemesterService.getSingleSemester(id);

    // console.log(result)
    sendResponse<IAcademicSemester>(res, {
      success: true,
      message: 'Semester retrieved successfully',
      statusCode: 200,
      data: result,
      // meta: result.meta,
      // data: result.data,
    });
    next();
  }
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;
    // console.log(id)
    const result = await AcademicSemesterService.updatedSemester(
      id,
      updatedData
    );

    // console.log(result)
    sendResponse<IAcademicSemester>(res, {
      success: true,
      message: 'Semester Uodated successfully',
      statusCode: 200,
      data: result,
      // meta: result.meta,
      // data: result.data,
    });
    next();
  }
);
export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
};
