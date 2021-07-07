import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import {
  fetchProductById,
  fetchProducts,
  fetchProductsByCategorySlug,
  fetchTrendingProducts
} from '@apis/product.api';
import { IProduct } from '@interfaces/index';
import { IProductState, IRootState } from '@interfaces/IState';

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
    setTrendingProductsAction: (state, action) => {
      state.trendingProducts = action.payload;
    },

    setProductAction: (state, action) => {
      state.product = action.payload;
    },

    setProductsAction: (state, action) => {
      state.products = action.payload;
    },
    setCategoryProductsAction: (state, action) => {
      const products: IProduct[] = action.payload.products;
      const categorySlug: string = action.payload.categorySlug;
      state[categorySlug] = products;
    }
  }
});

const {
  setTrendingProductsAction,
  setProductAction,
  setProductsAction,
  setCategoryProductsAction
} = productSlice.actions;

export const getProductsAction = (query: any) => async (dispatch: Dispatch) => {
  return fetchProducts(query).then(({ data }) => {
    dispatch(setProductsAction(data));
  });
};

export const getTrendingProductsAction = () => async (dispatch: Dispatch) => {
  return fetchTrendingProducts().then(trendingProducts => {
    dispatch(setTrendingProductsAction(trendingProducts));
  });
};

export const getProductByIdAction = (id: string) => async (
  dispatch: Dispatch
) => {
  return fetchProductById(id).then(product => {
    dispatch(setProductAction(product));
  });
};

export const getProductsByCategorySlugAction = (
  slug: string,
  query: any
) => async (dispatch: Dispatch) => {
  return fetchProductsByCategorySlug(slug, query).then(products => {
    dispatch(
      setCategoryProductsAction({
        products,
        categorySlug: slug
      })
    );
  });
};

const productState = (state: IRootState) => state.product;
const selector = function<T>(combiner: { (state: IProductState): T }) {
  return createSelector(productState, combiner);
};

export const getProduct = () => selector(state => state.product);
export const getProducts = () => selector(state => state.products);
export const getTrendingProducts = () =>
  selector(state => state.trendingProducts);

export const getProductsByCategorySlug = (slug: string) =>
  selector(state => (state[slug] || []) as IProduct[]);

export default productSlice.reducer;
