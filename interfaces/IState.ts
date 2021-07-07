import {
  ICartItem,
  ICategoryWithProductLength,
  IOrderResponse,
  IPaymentMethod,
  IProduct,
  IProductUnitWithLength,
  ITrackingResponse,
  IUser
} from './index';

export interface IAppState {
  limitOfToast: number;
  isLoading: boolean;
}

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface ICategoryState {
  categories: ICategoryWithProductLength[];
}

export interface IOrderState {
  orders: IOrderResponse[];
  tracking: ITrackingResponse[];
}

export interface IPaymentMethodState {
  paymentMethods: IPaymentMethod[];
}

export interface IProductState {
  products: IProduct[];
  trendingProducts: IProduct[];
  product: IProduct;
  [key: string]: any;
}

export interface IProductUnitState {
  productUnits: IProductUnitWithLength[];
}

export interface IRootState {
  app: IAppState;
  auth: IAuthState;
  cart: ICartState;
  category: ICategoryState;
  order: IOrderState;
  paymentMethod: IPaymentMethodState;
  product: IProductState;
  productUnit: IProductUnitState;
}
