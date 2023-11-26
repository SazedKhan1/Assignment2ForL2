type FullName = {
  firstName: string;
  lastName: string;
};

type Address = {
  street: string;
  city: string;
  country: string;
};

type Order = {
  productName: string;
  price: number;
  quantity: number;
};

type TUser = {
  userId: number;
  username: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  orders: Order;
};

export { TUser, FullName, Address, Order };
