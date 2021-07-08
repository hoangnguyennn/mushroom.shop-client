import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { IOrderState, IRootState } from '@interfaces/IState';
import { fetchOrdersApi, fetchTrackingApi } from '@apis/common';
import sorter from '@helpers/sorter';

export const initialState: IOrderState = {
  orders: [],
  tracking: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    setTracking(state, action) {
      state.tracking = action.payload;
    }
  }
});

const { setOrders, setTracking } = orderSlice.actions;

export const fetchOrders = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem('access-token');
  if (!token) return;

  return fetchOrdersApi().then(orders => {
    dispatch(setOrders(orders));
  });
};

export const fetchTracking =
  (orderId: string) => async (dispatch: Dispatch) => {
    const token = localStorage.getItem('access-token');
    if (!token) return;

    return fetchTrackingApi(orderId).then(tracking => {
      dispatch(setTracking(tracking));
    });
  };

const orderState = (state: IRootState) => state.order;
const selector = function <T>(combiner: { (state: IOrderState): T }) {
  return createSelector(orderState, combiner);
};

export const getOrders = () => selector(state => state.orders);
export const getOrderById = (id: string) => {
  return selector(state => state.orders.find(item => item.id === id));
};
export const getOrderTracking = () => {
  return selector(state => {
    return [...state.tracking].sort((a, b) => sorter(a, b, 'dateTime', Number));
  });
};

export default orderSlice.reducer;
