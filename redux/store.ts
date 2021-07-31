import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { IRootState } from '@interfaces/IState';
import reducers from './reducers';
import { initialState as authInitialState } from './reducers/auth.reducer';
import { initialState as productInitialState } from './reducers/product.reducer';
import { getAppDispatch } from '@hooks/useAppDispatch';

let store: ReturnType<typeof initStore>;

const rootState: IRootState = {
  auth: authInitialState,
  product: productInitialState
};

const initStore = (preloadedState = rootState) => {
  return configureStore({
    preloadedState,
    reducer: reducers
  });
};

export const initialStore = (preloadedState?: IRootState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  getAppDispatch(_store);
  return _store;
};

const useStore = (initialState: IRootState) => {
  const store = useMemo(() => initialStore(initialState), [initialState]);
  return store;
};

export default useStore;
