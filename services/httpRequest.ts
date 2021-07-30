import { AxiosRequestConfig } from 'axios';
import axiosInstance from './instance';

const httpRequest = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.get(url, config).then(res => res.data);
  },
  post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.post(url, data, config).then(res => res.data);
  },
  put: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.put(url, data, config).then(res => res.data);
  },
  patch: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    return axiosInstance.patch(url, data, config).then(res => res.data);
  },
  delete: async (url: string, config?: AxiosRequestConfig) => {
    return axiosInstance.delete(url, config).then(res => res.data);
  }
};

export default httpRequest;
