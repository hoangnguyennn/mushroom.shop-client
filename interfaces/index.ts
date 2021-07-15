import { ProductStatus } from './enums';

export interface IBreadcrumb {
  id: string;
  name: any;
  url: string;
}

export interface ICartForm {
  deliveryFullName: string;
  deliveryAddress: string;
  deliveryPhone: string;
  deliveryEmail: string;
  deliveryNote?: string;
  paymentMethodId: string;
}

export interface ICartItem extends IProduct {
  qty: number;
}

export interface ICategoryWithProductLength {
  id: string;
  name: string;
  slug: string;
  productsLength: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IObject<T = any> {
  [key: string]: T;
}

export interface IOrder {
  userId?: string;
  deliveryFullName: string;
  deliveryAddress: string;
  deliveryPhone: string;
  deliveryEmail: string;
  paymentMethodId: string;
  items: IOrderItem[];
}

export interface IOrderItem {
  productId: string;
  qty: number;
}

export interface IOrderItemResponse {
  id: string;
  productId: string;
  price: number;
  qty: number;
  product: {
    name: string;
    image: string;
  };
}

export interface IOrderResponse {
  id: string;
  deliveryFullName: string;
  deliveryAddress: string;
  deliveryPhone: string;
  deliveryEmail: string;
  deliveryDate?: string;
  paymentStatus: string;
  orderStatus: string;
  orderDate: string;

  user?: IUser;
  paymentMethod: IPaymentMethod;
  items: IOrderItemResponse[];
}

export interface IPaymentMethod {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  unit: string;
  images: string[];
  status: ProductStatus;
  longDescription: string;
}

export interface IProductUnitWithLength {
  id: string;
  name: string;
  description: string;
  productsLength: number;
}

export interface IProductWithLink extends IProduct {
  link: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phone: string;
}

export interface ITrackingResponse {
  id: string;
  orderId: string;
  orderStatus: string;
  dateTime: number;
  description?: string;
}

export interface IUser {
  id: string;
  email: string;
  fullName: string;
  address: string;
  phone: string;
  userType: string;
}

export interface IUserCreate {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IUserUpdateInfo {
  fullName: string;
  address: string;
  phone: string;
}

export interface IUserUpdatePassword {
  password: string;
}

export type IUserUpdate = IUserUpdateInfo | IUserUpdatePassword;

export interface IWidget {
  id: string;
  title: string;
  url: string;
}
