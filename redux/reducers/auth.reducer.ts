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
    },
    clearUser: state => {
      state.token = '';
      state.user = {
        id: '',
        email: '',
        fullName: '',
        phone: '',
        address: '',
        userType: ''
      };
    }
  }
});

const { setToken, setUser, clearUser } = authSlice.actions;

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

export const loginByToken = createAsyncThunk(
  'auth/loginByToken',
  async (_, { dispatch }) => {
    const token = localStorage.getItem('access-token');
    if (!token) {
      localStorage.removeItem('access-token');
      return;
    }

    dispatch(setToken(token));
    return CommonApi.loginByToken().then(user => {
      dispatch(setUser(user));
    });
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    localStorage.removeItem('access-token');
    dispatch(clearUser());
  }
);

const authState = (state: IRootState) => state.auth;
const selector = <T>(combiner: (state: IAuthState) => T) => {
  return createSelector(authState, combiner);
};

export const getToken = () => selector(state => state.token);
export const getFullName = () => selector(state => state.user.fullName);

export default authSlice.reducer;
