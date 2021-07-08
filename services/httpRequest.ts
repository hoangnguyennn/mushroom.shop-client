import { AxiosRequestConfig } from 'axios';
import axiosInstance from './instance';

const httpRequest = {
  async get(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.get(url, config).then(res => res.data);
  },
  async post(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosInstance.post(url, data, config).then(res => res.data);
  },
  async put(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosInstance.put(url, data, config).then(res => res.data);
  },
  async patch(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosInstance.patch(url, data, config).then(res => res.data);
  },
  async delete(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.delete(url, config).then(res => res.data);
  }
};

export default httpRequest;
