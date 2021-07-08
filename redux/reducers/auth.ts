import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';

import { IAuthState, IRootState } from '@interfaces/IState';
import { ILogin, IUserCreate, IUserUpdate } from '@interfaces/index';
import {
  registerApi,
  loginApi,
  loginByTokenApi,
  updateUserInfoApi
} from '@apis/common';

export const initialState: IAuthState = {
  token: '',
  user: {
    id: '',
    email: '',
    fullName: '',
    address: '',
    phone: '',
    userType: ''
  }
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        fullName: action.payload.fullName,
        address: action.payload.address,
        phone: action.payload.phone,
        userType: action.payload.userType
      };
    },
    clearUser(state) {
      state.token = '';
      state.user = {
        id: '',
        email: '',
        fullName: '',
        address: '',
        phone: '',
        userType: ''
      };
    }
  }
});

const { setToken, setUser, clearUser } = AuthSlice.actions;

const register = (user: IUserCreate) => async () => {
  return registerApi(user);
};

const login = (userLogin: ILogin) => async (dispatch: Dispatch) => {
  return loginApi(userLogin).then(response => {
    dispatch(setToken(response.token));
    dispatch(setUser(response.user));
    window.localStorage.setItem('access-token', response.token);
  });
};

const loginByToken = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    localStorage.removeItem('access-token');
    return;
  }

  return loginByTokenApi()
    .then(user => {
      dispatch(setToken(token));
      dispatch(setUser(user));
    })
    .catch(err => {
      localStorage.removeItem('access-token');
      throw err;
    });
};

const logout = () => () => localStorage.removeItem('access-token');

const updateUserInfoAction = (userId: string, userInfo: IUserUpdate) => {
  return async (dispatch: Dispatch) => {
    const token = localStorage.getItem('access-token');
    if (!token) {
      localStorage.removeItem('access-token');
      dispatch(clearUser());
      throw new Error('token not found');
    }

    return updateUserInfoApi(userId, userInfo).then(userUpdated => {
      dispatch(setUser(userUpdated));
    });
  };
};

export { login, loginByToken, logout, register, updateUserInfoAction };

const authState = (state: IRootState) => state.auth;
const selector = function <T>(combiner: { (state: IAuthState): T }) {
  return createSelector(authState, combiner);
};

export const getFullName = () => selector(state => state.user.fullName);
export const getToken = () => selector(state => state.token);
export const getUser = () => selector(state => state.user);

export default AuthSlice.reducer;
