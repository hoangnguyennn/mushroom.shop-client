import { ENDPOINT } from '@configs/endpoint';
import { ICategoryWithProductLength } from '@interfaces/index';
import axiosInstance from '@services/instance';

export const fetchCategories = async (
  query: any
): Promise<ICategoryWithProductLength> => {
  return axiosInstance
    .get(ENDPOINT.categories, {
      params: { ...query, 'with-product-length': 'true' }
    })
    .then(res => res.data);
};
