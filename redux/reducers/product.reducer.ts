import CommonApi from '@apis/common';
import { IProductState, IRootState } from '@interfaces/IState';
import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

export const initialState: IProductState = {
  trendingProducts: []
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload;
    }
  }
});

const { setTrendingProducts } = productSlice.actions;

export const fetchTrendingProducts = createAsyncThunk(
  'products/fetchTrendingProducts',
  async (_, { dispatch }) => {
    return CommonApi.fetchTrendingProducts().then(trendingProducts => {
      dispatch(setTrendingProducts(trendingProducts));
    });
  }
);

const productState = (state: IRootState) => state.product;
const selector = <T>(combiner: (state: IProductState) => T) => {
  return createSelector(productState, combiner);
};

export const getTrendingProducts = () =>
  selector(state => state.trendingProducts);

export default productSlice.reducer;
