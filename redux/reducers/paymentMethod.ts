import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';

import { IPaymentMethodState, IRootState } from '@interfaces/IState';
import { fetchPaymentMethodsApi } from '@apis/common';

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

export const fetchPaymentMethods = () => async (dispatch: Dispatch) => {
  return fetchPaymentMethodsApi().then(paymentMethods => {
    dispatch(setPaymentMethods(paymentMethods));
  });
};

const paymentMethodState = (state: IRootState) => state.paymentMethod;
const selector = function <T>(combiner: { (state: IPaymentMethodState): T }) {
  return createSelector(paymentMethodState, combiner);
};

export const getPaymentMethods = () => selector(state => state.paymentMethods);

export default paymentMethodSlice.reducer;
