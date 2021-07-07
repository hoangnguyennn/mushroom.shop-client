import { ENDPOINT } from '@configs/endpoint';
import { ILogin, ILoginResponse, IUser, IUserCreate } from '@interfaces/index';
import axiosInstance from '@services/instance';

export const register = async (user: IUserCreate): Promise<IUser> => {
  return axiosInstance.post(ENDPOINT.register, user).then(res => res.data);
};

export const login = async (credential: ILogin): Promise<ILoginResponse> => {
  return axiosInstance.post(ENDPOINT.login, credential).then(res => res.data);
};

export const loginByToken = async (token: string): Promise<IUser> => {
  return axiosInstance
    .post(ENDPOINT.me, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data);
};
