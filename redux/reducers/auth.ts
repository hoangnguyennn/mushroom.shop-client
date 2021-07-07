import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit';

import { IAuthState, IRootState } from '@interfaces/IState';
import { ILogin, IUserCreate, IUserUpdate } from '@interfaces/index';
import { login, loginByToken, register } from '@apis/auth.api';
import { updateUserInfo } from '@apis/user.api';

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
    setTokenAction(state, action) {
      state.token = action.payload;
    },
    setUserAction(state, action) {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        fullName: action.payload.fullName,
        address: action.payload.address,
        phone: action.payload.phone,
        userType: action.payload.userType
      };
    },
    clearUserAction(state) {
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

const { setTokenAction, setUserAction, clearUserAction } = AuthSlice.actions;

const registerAction = (user: IUserCreate) => async () => {
  return register(user);
};

const loginAction = (userLogin: ILogin) => async (dispatch: Dispatch) => {
  return login(userLogin).then(response => {
    dispatch(setTokenAction(response.token));
    dispatch(setUserAction(response.user));
    window.localStorage.setItem('access-token', response.token);
  });
};

const loginByTokenAction = () => async (dispatch: Dispatch) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    localStorage.removeItem('access-token');
    return;
  }

  return loginByToken(token)
    .then(user => {
      dispatch(setTokenAction(token));
      dispatch(setUserAction(user));
    })
    .catch(err => {
      localStorage.removeItem('access-token');
      throw err;
    });
};

const logoutAction = () => () => localStorage.removeItem('access-token');

const updateUserInfoAction = (userId: string, userInfo: IUserUpdate) => {
  return async (dispatch: Dispatch) => {
    const token = localStorage.getItem('access-token');
    if (!token) {
      localStorage.removeItem('access-token');
      dispatch(clearUserAction());
      throw new Error('token not found');
    }

    return updateUserInfo(userId, userInfo, token).then(userUpdated => {
      dispatch(setUserAction(userUpdated));
    });
  };
};

export {
  loginAction,
  loginByTokenAction,
  logoutAction,
  registerAction,
  updateUserInfoAction
};

const authState = (state: IRootState) => state.auth;
const selector = function<T>(combiner: { (state: IAuthState): T }) {
  return createSelector(authState, combiner);
};

export const getFullName = () => selector(state => state.user.fullName);
export const getToken = () => selector(state => state.token);
export const getUserInfo = () => selector(state => state.user);

export default AuthSlice.reducer;
