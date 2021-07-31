import { IRootState } from '@interfaces/IState';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth.reducer';
import cartReducer from './cart.reducer';
import productReducer from './product.reducer';

export default combineReducers<IRootState>({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer
});
