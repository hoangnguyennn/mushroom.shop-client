import { ICartItem, IProduct, IUser } from '.';

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface ICartState {
  cartItems: ICartItem[];
}

export interface IProductState {
  trendingProducts: IProduct[];
  products: IProduct[];
  product: IProduct;
}

export interface IRootState {
  auth: IAuthState;
  cart: ICartState;
  product: IProductState;
}
