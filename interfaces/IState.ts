import { IProduct, IUser } from '.';

export interface IAuthState {
  token: string;
  user: IUser;
}

export interface IProductState {
  trendingProducts: IProduct[];
}

export interface IRootState {
  auth: IAuthState;
  product: IProductState;
}
