import CommonApi from '@apis/common';
import { ILogin } from '@interfaces/index';
import { IAuthState, IRootState } from '@interfaces/IState';
import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

export const initialState: IAuthState = {
  token: '',
  user: {
    id: '',
    email: '',
    fullName: '',
    phone: '',
    address: '',
    userType: ''
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

const { setToken, setUser } = authSlice.actions;

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: ILogin, { dispatch }) => {
    return CommonApi.login(loginData).then(({ token, user }) => {
      dispatch(setToken(token));
      dispatch(setUser(user));

      localStorage.setItem('access-token', token);
    });
  }
);

const authState = (state: IRootState) => state.auth;
const selector = <T>(combiner: (state: IAuthState) => T) => {
  return createSelector(authState, combiner);
};

export const getToken = () => selector(state => state.token);

export default authSlice.reducer;
