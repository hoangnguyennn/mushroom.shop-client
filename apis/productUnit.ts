import { ENDPOINT } from '@configs/endpoint';
import { IProductUnitWithLength } from '@interfaces/index';
import axiosInstance from '@services/instance';

export const fetchProductUnits = async (query?: {
  [key: string]: any;
}): Promise<IProductUnitWithLength> => {
  return axiosInstance
    .get(ENDPOINT.productUnits, {
      params: {
        'with-product-length': 'true',
        ...query
      }
    })
    .then(res => res.data);
};
