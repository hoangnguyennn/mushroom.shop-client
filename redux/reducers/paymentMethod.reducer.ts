import CommonApi from '@apis/common';
import { IPaymentMethodState, IRootState } from '@interfaces/IState';
import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

export const initialState: IPaymentMethodState = {
  paymentMethods: []
};

const paymentMethodSlice = createSlice({
  name: 'paymentMethod',
  initialState,
  reducers: {
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload;
    }
  }
});

const { setPaymentMethods } = paymentMethodSlice.actions;

export const fetchPaymentMethods = createAsyncThunk(
  'paymentMethod/fetchPaymentMethods',
  async (_, { dispatch }) => {
    return CommonApi.fetchPaymentMethods().then(paymentMethods => {
      dispatch(setPaymentMethods(paymentMethods));
    });
  }
);

const paymentMethodState = (state: IRootState) => state.paymentMethod;
const selector = <T>(combiner: (state: IPaymentMethodState) => T) => {
  return createSelector(paymentMethodState, combiner);
};

export const getPaymentMethods = () => selector(state => state.paymentMethods);

export default paymentMethodSlice.reducer;
