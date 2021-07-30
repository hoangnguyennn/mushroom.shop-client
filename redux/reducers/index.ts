import { IRootState } from '@interfaces/IState';
import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product.reducer';

export default combineReducers<IRootState>({
  product: productReducer
});
