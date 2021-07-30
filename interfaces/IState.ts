import { IProduct } from '.';

export interface IProductState {
  trendingProducts: IProduct[];
}

export interface IRootState {
  product: IProductState;
}
