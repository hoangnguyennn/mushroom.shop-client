import { AxiosRequestConfig } from 'axios';
import axiosInstance from './instance';

const httpRequest = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get(url, config).then(res => res.data);
  },
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.post(url, data, config).then(res => res.data);
  },
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.put(url, data, config).then(res => res.data);
  },
  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return axiosInstance.patch(url, data, config).then(res => res.data);
  },
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete(url, config).then(res => res.data);
  }
};

export default httpRequest;
