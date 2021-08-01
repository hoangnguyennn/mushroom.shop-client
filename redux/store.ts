import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { IRootState } from '@interfaces/IState';
import reducers from './reducers';
import { initialState as authInitialState } from './reducers/auth.reducer';
import { initialState as cartInitialState } from './reducers/cart.reducer';
import { initialState as paymentMethodInitialState } from './reducers/paymentMethod.reducer';
import { initialState as productInitialState } from './reducers/product.reducer';

const rootState: IRootState = {
  auth: authInitialState,
  cart: cartInitialState,
  paymentMethod: paymentMethodInitialState,
  product: productInitialState
};

const storeWrapper = (() => {
  const initStore = (preloadedState = rootState) => {
    return configureStore({
      preloadedState,
      reducer: reducers
    });
  };

  let store = initStore();

  return {
    getStore(preloadedState?: IRootState) {
      if (preloadedState) {
        store = useMemo(() => initStore(preloadedState), [preloadedState]);
      }

      return store;
    }
  };
})();

export default storeWrapper;
