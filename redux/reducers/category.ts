import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { ICategoryState, IRootState } from '@interfaces/IState';
import { fetchCategoriesApi } from '@apis/common';
import sorter from '@helpers/sorter';
import { IObject } from '@interfaces/index';

export const initialState: ICategoryState = {
  categories: []
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    }
  }
});

const { setCategories } = categorySlice.actions;

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (query: IObject, { dispatch }) => {
    return fetchCategoriesApi(query).then(categories => {
      dispatch(setCategories(categories));
    });
  }
);

const categoryState = (state: IRootState) => state.category;
const selector = function <T>(combiner: { (state: ICategoryState): T }) {
  return createSelector(categoryState, combiner);
};

export const getCategories = () =>
  selector(state => {
    return [...state.categories]
      .filter(item => item.productsLength)
      .sort((a, b) => sorter(a, b, 'name'));
  });
export const getCategoryBySlug = (slug: string) => {
  return selector(state => state.categories.find(item => item.slug === slug));
};

export default categorySlice.reducer;
