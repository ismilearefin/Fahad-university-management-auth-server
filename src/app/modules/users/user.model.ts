import { Schema, model } from 'mongoose';
import { IUser, IuserMethods, UserModel } from './user.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';
// step---> 2
const userSchema = new Schema<IUser, Record<string, never>, IuserMethods>(
  {
    id: {
      type: String,
      required: true,
      // unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.methods.isUserExist = async function (
  id: string
): Promise<Pick<
  IUser,
  'id' | 'password' | 'role' | 'needsPasswordChange'
> | null> {
  return await User.findOne(
    { id },
    { id: 1, role: 1, needsPasswordChange: 1, password: 1 }
  );
};

userSchema.methods.isPasswrodMatch = async function (
  givenPassword: string,
  savedPassword: string
): Promise<Partial<boolean>> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

userSchema.pre('save', async function (next) {
  // hashing user password
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );

  next();
});

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
