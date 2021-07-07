import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchProductUnits } from '@apis/productUnit';
import { IProductUnitState, IRootState } from '@interfaces/IState';

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

export const getProductUnitsAction = (query?: any) => async (
  dispatch: Dispatch
) => {
  return fetchProductUnits(query).then(productUnits => {
    dispatch(setProductUnits(productUnits));
  });
};

const productUnitState = (state: IRootState) => state.productUnit;
const selector = function<T>(combiner: { (state: IProductUnitState): T }) {
  return createSelector(productUnitState, combiner);
};

export const getProductUnits = () =>
  selector(state => {
    return [...state.productUnits]
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

export default productUnitSlice.reducer;
