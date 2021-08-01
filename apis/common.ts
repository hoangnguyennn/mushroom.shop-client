import { ILogin, IOrder, IRegister } from '@interfaces/index';
import httpRequest from '@services/httpRequest';

const CommonApi = {
  createOrder: (orderData: IOrder) => {
    return httpRequest.post('/orders', orderData);
  },
  fetchPaymentMethods: () => {
    return httpRequest.get('/payment-methods');
  },
  fetchProductById: (id: string) => {
    return httpRequest.get(`/products/${id}`);
  },
  fetchProducts: () => {
    return httpRequest.get('/products');
  },
  fetchTrendingProducts: () => {
    return httpRequest.get('/products/trending');
  },
  login: (loginData: ILogin) => {
    return httpRequest.post('/auth/sign-in', loginData);
  },
  loginByToken: () => {
    return httpRequest.post('/auth/me');
  },
  register: (registerData: IRegister) => {
    return httpRequest.post('/auth/sign-up', registerData);
  }
};

export default CommonApi;
