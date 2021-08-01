import { ILogin, IOrder, IRegister } from '@interfaces/index';
import httpRequest from '@services/httpRequest';

const CommonApi = {
  fetchProducts: () => {
    return httpRequest.get('/products');
  },
  fetchTrendingProducts: () => {
    return httpRequest.get('/products/trending');
  },
  fetchProductById: (id: string) => {
    return httpRequest.get(`/products/${id}`);
  },
  login: (loginData: ILogin) => {
    return httpRequest.post('/auth/sign-in', loginData);
  },
  loginByToken: () => {
    return httpRequest.post('/auth/me');
  },
  register: (registerData: IRegister) => {
    return httpRequest.post('/auth/sign-up', registerData);
  },
  createOrder: (orderData: IOrder) => {
    return httpRequest.post('/orders', orderData);
  }
};

export default CommonApi;
