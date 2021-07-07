import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IAppState, IRootState } from '@interfaces/IState';

export const initialState: IAppState = {
  limitOfToast: 3,
  isLoading: false,
  isDesktop: true
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoadingAction(state, action) {
      state.isLoading = action.payload;
    },
    setDesktopAction(state, action) {
      state.isDesktop = action.payload;
    }
  }
});

export const { setLoadingAction, setDesktopAction } = appSlice.actions;

const appState = (state: IRootState) => state.app;
const selector = function <T>(combiner: { (state: IAppState): T }) {
  return createSelector(appState, combiner);
};

export const getLimitOfToast = () => selector(state => state.limitOfToast);
export const getLoading = () => selector(state => state.isLoading);
export const getDesktop = () => selector(state => state.isDesktop);

export default appSlice.reducer;
