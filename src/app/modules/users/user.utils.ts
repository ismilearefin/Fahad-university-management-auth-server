import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

export const generateStudentId = async (
  academicsemester: IAcademicSemester | null
) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  //increment by one
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementId = `${academicsemester?.year.substring(2)}${
    academicsemester?.code
  }${incrementId}`;

  // console.log(incrementId);
  return incrementId;
};

export const findLastAdminId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'admin',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementId = `A-${incrementId}`;
  // console.log(incrementId);
  return incrementId;
};
export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async () => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementId = `F-${incrementId}`;
  // console.log(incrementId);
  return incrementId;
};
