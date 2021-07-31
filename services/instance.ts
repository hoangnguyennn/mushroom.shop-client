import axios, { AxiosError } from 'axios';
import { BASE_URL } from '@configs/endpoint';
import storeWrapper from '../redux/store';
import { getToken } from '@redux/reducers/auth.reducer';

const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(config => {
  const store = storeWrapper.getStore();
  const token = getToken()(store.getState());
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.isAxiosError) {
      throw (error as AxiosError).response.data;
    }

    throw error;
  }
);

export default instance;
