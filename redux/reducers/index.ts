import { IRootState } from '@interfaces/IState';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth.reducer';
import productReducer from './product.reducer';

export default combineReducers<IRootState>({
  auth: authReducer,
  product: productReducer
});
