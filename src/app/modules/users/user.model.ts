import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
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
    //    admin:{
    //     type: Schema.Types.ObjectId,
    //     ref:'Admin'
    //  },
    //    faculty:{
    //     type: Schema.Types.ObjectId,
    //     ref:'Faculty'
    //  }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
