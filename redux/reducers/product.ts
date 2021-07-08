import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import { IProduct } from '@interfaces/index';
import { IProductState, IRootState } from '@interfaces/IState';
import {
  fetchProductByIdApi,
  fetchProductsApi,
  fetchProductsByCategorySlugApi,
  fetchTrendingProductsApi
} from '@apis/common';

export const initialState: IProductState = {
  products: [],
  trendingProducts: [],
  product: {
    id: '',
    name: '',
    price: 0,
    description: '',
    unit: '',
    images: [],
    status: null,
    longDescription: ''
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload;
    },

    setProduct: (state, action) => {
      state.product = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategoryProducts: (state, action) => {
      const products: IProduct[] = action.payload.products;
      const categorySlug: string = action.payload.categorySlug;
      state[categorySlug] = products;
    }
  }
});

const { setTrendingProducts, setProduct, setProducts, setCategoryProducts } =
  productSlice.actions;

export const fetchProducts = (query: any) => async (dispatch: Dispatch) => {
  return fetchProductsApi(query).then(({ data }) => {
    dispatch(setProducts(data));
  });
};

export const fetchTrendingProducts = () => async (dispatch: Dispatch) => {
  return fetchTrendingProductsApi().then(trendingProducts => {
    dispatch(setTrendingProducts(trendingProducts));
  });
};

export const fetchProductById = (id: string) => async (dispatch: Dispatch) => {
  return fetchProductByIdApi(id).then(product => {
    dispatch(setProduct(product));
  });
};

export const fetchProductsByCategorySlug =
  (slug: string, query: any) => async (dispatch: Dispatch) => {
    return fetchProductsByCategorySlugApi(slug, query).then(products => {
      dispatch(setCategoryProducts({ products, categorySlug: slug }));
    });
  };

const productState = (state: IRootState) => state.product;
const selector = function <T>(combiner: { (state: IProductState): T }) {
  return createSelector(productState, combiner);
};

export const getProduct = () => selector(state => state.product);
export const getProducts = () => selector(state => state.products);
export const getTrendingProducts = () => {
  return selector(state => state.trendingProducts);
};

export const getProductsByCategorySlug = (slug: string) => {
  return selector(state => (state[slug] || []) as IProduct[]);
};

export default productSlice.reducer;
