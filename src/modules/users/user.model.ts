import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
// import config from '../../app/config';

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

// userSchema.virtual('fullName').get(function () {
//   return this.firstName + this.name.lastName;
// });

// // pre save middleware/ hook : will work on create()  save()
// userSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook : we will save  data');
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const users = this;
//   users.password = await bcrypt.hash(
//     users.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });

// // post save middleware / hook
// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

export const User = model<TUser>('User', userSchema);
