import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  userId: { type: Number },
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  address: {
    type: String,
    required: [true, 'address is required'],
  },
  age: { type: Number, required: [true, 'age is required'] },
  email: { type: String, required: [true, 'email is required'] },
  fullName: {
    firstName: { type: String, required: [true, 'first name is required'] },
    lastName: {
      type: String,
      required: [true, 'lastname is required'],
    },
  },
  hobbies: { type: [String] },
  isActive: { type: Boolean, default: true },
  orders: {
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
});

export const User = model<TUser>('User', userSchema);
