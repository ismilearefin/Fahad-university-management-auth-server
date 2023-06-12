import { Model } from 'mongoose';

// step---> 1

export type IUser = {
  id: string;
  role: string;
  password: string;
};
export type UserModel = Model<IUser, Record<string, unknown>>;
