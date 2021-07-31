import CommonApi from '@apis/common';
import { IProductState, IRootState } from '@interfaces/IState';
import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

export const initialState: IProductState = {
  trendingProducts: [],
  products: [],
  product: {
    id: '',
    name: '',
    price: 0,
    description: '',
    status: '',
    longDescription: '',
    unit: null,
    images: [],
    category: null
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    }
  }
});

const { setProducts, setTrendingProducts, setProduct } = productSlice.actions;

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { dispatch }) => {
    return CommonApi.fetchProducts().then(products => {
      dispatch(setProducts(products));
    });
  }
);

export const fetchTrendingProducts = createAsyncThunk(
  'product/fetchTrendingProducts',
  async (_, { dispatch }) => {
    return CommonApi.fetchTrendingProducts().then(trendingProducts => {
      dispatch(setTrendingProducts(trendingProducts));
    });
  }
);

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (id: string, { dispatch }) => {
    return CommonApi.fetchProductById(id).then(product => {
      dispatch(setProduct(product));
    });
  }
);

const productState = (state: IRootState) => state.product;
const selector = <T>(combiner: (state: IProductState) => T) => {
  return createSelector(productState, combiner);
};

export const getProduct = () => selector(state => state.product);
export const getProducts = () => selector(state => state.products);
export const getTrendingProducts = () =>
  selector(state => state.trendingProducts);

export default productSlice.reducer;
