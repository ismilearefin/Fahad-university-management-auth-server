import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';

// step---> 1

export type IUser = {
  id: string;
  role: string;
  password: string;
  needsPasswordChange: true | false;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

export type IuserMethods = {
  isUserExist(id: string): Promise<Partial<IUser> | null>;
  isPasswrodMatch(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};
export type UserModel = Model<IUser, Record<string, unknown>, IuserMethods>;
