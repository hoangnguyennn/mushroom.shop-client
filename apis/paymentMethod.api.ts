import { ENDPOINT } from '@configs/endpoint';
import { IPaymentMethod } from '@interfaces/index';
import axiosInstance from '@services/instance';

export const fetchPaymentMethods = async (): Promise<IPaymentMethod[]> => {
  return axiosInstance.get(ENDPOINT.paymentMethods).then(res => res.data);
};
