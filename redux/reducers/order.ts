import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchOrders, fetchTracking } from '@apis/order.api';
import { IOrderState, IRootState } from '@interfaces/IState';

export const initialState: IOrderState = {
  orders: [],
  tracking: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrdersAction(state, action) {
      state.orders = action.payload;
    },
    setTrackingAction(state, action) {
      state.tracking = action.payload;
    }
  }
});

const { setOrdersAction, setTrackingAction } = orderSlice.actions;

export const getOrdersAction = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    return;
  }

  return fetchOrders(token).then(orders => {
    dispatch(setOrdersAction(orders));
  });
};

export const getTrackingAction = (orderId: string) => async (
  dispatch: Dispatch
) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    return;
  }

  return fetchTracking(orderId, token).then(tracking => {
    dispatch(setTrackingAction(tracking));
  });
};

const orderState = (state: IRootState) => state.order;
const selector = function<T>(combiner: { (state: IOrderState): T }) {
  return createSelector(orderState, combiner);
};

export const getOrders = () => selector(state => state.orders);
export const getOrderById = (id: string) =>
  selector(state => state.orders.find(item => item.id === id));
export const getOrderTracking = () =>
  selector(state =>
    [...state.tracking].sort((a, b) => Number(b.dateTime) - Number(a.dateTime))
  );

export default orderSlice.reducer;
