import { combineReducers } from '@reduxjs/toolkit';

import { IRootState } from '@interfaces/IState';
import appReducer from './app';
import authReducer from './auth';
import cartReducer from './cart';
import categoryReducer from './category';
import orderReducer from './order';
import paymentMethodReducer from './paymentMethod';
import productReducer from './product';
import productUnitReducer from './productUnit';

export default combineReducers<IRootState>({
  app: appReducer,
  auth: authReducer,
  cart: cartReducer,
  category: categoryReducer,
  order: orderReducer,
  paymentMethod: paymentMethodReducer,
  product: productReducer,
  productUnit: productUnitReducer
});
