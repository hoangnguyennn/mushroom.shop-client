import { ICartItem, IPaymentMethod, IProduct, IUser } from '.';

export interface IAuthState {
  isUserFetched: boolean;
  token: string;
  user: IUser;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface IPaymentMethodState {
  paymentMethods: IPaymentMethod[];
}

export interface IProductState {
  trendingProducts: IProduct[];
  products: IProduct[];
  product: IProduct;
}

export interface IRootState {
  auth: IAuthState;
  cart: ICartState;
  paymentMethod: IPaymentMethodState;
  product: IProductState;
}
