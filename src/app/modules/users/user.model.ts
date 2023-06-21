import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';
// step---> 2
const userSchema = new Schema<IUser>(
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
