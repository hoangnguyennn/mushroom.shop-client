export interface ICartItem extends IProduct {
  qty: number;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface IImage {
  id: string;
  url: string;
  publicId: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IObject {
  [key: string]: any;
}

export interface IOrder {
  deliveryEmail: string;
  deliveryFullName: string;
  deliveryPhone: string;
  deliveryAddress: string;
  paymentMethodId: string;
  items: IOrderItem[];
}

export interface IOrderItem {
  productId: string;
  qty: number;
}

export interface IPaymentMethod {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  status: string;
  longDescription: string;
  unit: IProductUnit;
  images: IImage[];
  category: ICategory;
}

export interface IProductUnit {
  id: string;
  name: string;
}

export interface IRegister {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IRegisterForm extends IRegister {
  confirmPassword: string;
}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  address: string;
  userType: string;
}
