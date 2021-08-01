import CommonApi from '@apis/common';
import {
  ILogin,
  IRegister,
  IUserUpdateInfo,
  IUserUpdatePassword
} from '@interfaces/index';
import { IAuthState, IRootState } from '@interfaces/IState';
import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';

export const initialState: IAuthState = {
  isUserFetched: false,
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
    setIsUserFetched: (state, action) => {
      state.isUserFetched = action.payload;
    },
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

const { setIsUserFetched, setToken, setUser, clearUser } = authSlice.actions;
export { setIsUserFetched };

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

export const register = createAsyncThunk(
  'auth/register',
  async (registerData: IRegister) => {
    return CommonApi.register(registerData);
  }
);

export const updateUser = createAsyncThunk<
  void,
  IUserUpdateInfo | IUserUpdatePassword,
  { state: IRootState }
>(
  'auth/updateUser',
  async (
    userData: IUserUpdateInfo | IUserUpdatePassword,
    { getState, dispatch }
  ) => {
    const userId = getUserId()(getState());
    return CommonApi.updateUser(userId, userData).then(user => {
      dispatch(setUser(user));
    });
  }
);

const authState = (state: IRootState) => state.auth;
const selector = <T>(combiner: (state: IAuthState) => T) => {
  return createSelector(authState, combiner);
};

export const getToken = () => selector(state => state.token);
export const getFullName = () => selector(state => state.user.fullName);
export const getUserId = () => selector(state => state.user.id);
export const getUser = () => selector(state => state.user);
export const getIsUserFetched = () => selector(state => state.isUserFetched);

export default authSlice.reducer;
