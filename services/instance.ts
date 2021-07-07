import { EnhancedStore } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '@configs/endpoint';
import { IRootState } from '@interfaces/IState';
import { setLoadingAction } from '@redux/reducers/app';

const instance = axios.create({
  baseURL: BASE_URL
});

export const interceptors = (store: EnhancedStore<IRootState>) => {
  instance.interceptors.request.use(config => {
    const { dispatch } = store;
    dispatch(setLoadingAction(true));
    const token = localStorage.getItem('access-token');
    config.headers = { Authorization: `Bearer ${token}` };
    return config;
  });

  instance.interceptors.response.use(
    response => {
      const { dispatch } = store;
      dispatch(setLoadingAction(false));
      return response;
    },
    (error: any) => {
      const { dispatch } = store;
      dispatch(setLoadingAction(false));
      if (error.isAxiosError) {
        throw error.response?.data;
      }

      throw error;
    }
  );
};

export default instance;
