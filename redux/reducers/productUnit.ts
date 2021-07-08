import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { IProductUnitState, IRootState } from '@interfaces/IState';
import { fetchProductUnitsApi } from '@apis/common';
import sorter from '@helpers/sorter';

export const initialState: IProductUnitState = {
  productUnits: []
};

const productUnitSlice = createSlice({
  name: 'productUnit',
  initialState,
  reducers: {
    setProductUnits(state, action) {
      state.productUnits = action.payload;
    }
  }
});

const { setProductUnits } = productUnitSlice.actions;

export const fetchProductUnits =
  (query?: any) => async (dispatch: Dispatch) => {
    return fetchProductUnitsApi(query).then(productUnits => {
      dispatch(setProductUnits(productUnits));
    });
  };

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function <T>(combiner: { (state: IProductUnitState): T }) {
  return createSelector(productUnitState, combiner);
};

export const getProductUnits = () =>
  selector(state => {
    return [...state.productUnits]
      .filter(item => item.productsLength)
      .sort((a, b) => sorter(a, b, 'name'));
  });

export default productUnitSlice.reducer;
