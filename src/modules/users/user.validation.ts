import { z } from 'zod';

const fullNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const orderSchema = z.object({
  productName: z.string(),
  quantity: z.number(),
  price: z.number(),
});

export const userValidationSchema = z.object({
  userId: z.number(),
  username: z
    .string()
    .refine((value) => value.length > 0, { message: 'Username is required' }),
  address: z
    .string()
    .refine((value) => value.length > 0, { message: 'Address is required' }),
  age: z.number().refine((value) => value > 0, { message: 'Age is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .refine((value) => value.length > 0, { message: 'Email is required' }),
  fullName: fullNameSchema,
  hobbies: z.array(z.string()),
  isActive: z.boolean().default(true),
  orders: z.array(orderSchema),
});
