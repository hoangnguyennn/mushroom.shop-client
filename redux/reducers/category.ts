import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchCategories } from '@apis/category.api';
import { ICategoryState, IRootState } from '@interfaces/IState';

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

export const getCategoriesAction = (query: any) => async (
  dispatch: Dispatch
) => {
  return fetchCategories(query).then(categories => {
    dispatch(setCategories(categories));
  });
};

const categoryState = (state: IRootState) => state.category;
const selector = function<T>(combiner: { (state: ICategoryState): T }) {
  return createSelector(categoryState, combiner);
};

export const getCategories = () =>
  selector(state => {
    return [...state.categories]
      .filter(item => item.productsLength)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }

        if (a.name < b.name) {
          return -1;
        }

        return 0;
      });
  });
export const getCategoryBySlug = (slug: string) =>
  selector(state => state.categories.find(item => item.slug === slug));

export default categorySlice.reducer;
