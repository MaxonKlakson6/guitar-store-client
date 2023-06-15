export interface User {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  deliveryAddress: string;
  secondDeliveryAddress: string;
}

export type UserFormData = Omit<
  User,
  "deliveryAddress" | "secondDeliveryAddress"
>;
