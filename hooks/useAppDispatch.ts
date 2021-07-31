import { IRootState } from '@interfaces/IState';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  ThunkDispatch
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

let AppDispatch: ThunkDispatch<CombinedState<IRootState>, null, AnyAction>;
export const getAppDispatch = (store: EnhancedStore<IRootState>) => {
  AppDispatch = store.dispatch;
};

export const useAppDispatch = () => useDispatch<typeof AppDispatch>();
