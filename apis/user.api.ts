import { ENDPOINT } from '@configs/endpoint';
import { IUser, IUserUpdate } from '@interfaces/index';
import axiosInstance from '@services/instance';

export const updateUserInfo = async (
  userId: string,
  userInfo: IUserUpdate,
  token: string
): Promise<IUser> => {
  return axiosInstance
    .patch(`${ENDPOINT.users}/${userId}`, userInfo, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data);
};
