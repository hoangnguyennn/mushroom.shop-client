import { ILogin } from '@interfaces/index';
import httpRequest from '@services/httpRequest';

const CommonApi = {
  fetchTrendingProducts: () => {
    return httpRequest.get('/products/trending');
  },
  login: (loginData: ILogin) => {
    return httpRequest.post('/auth/sign-in', loginData);
  },
  loginByToken: () => {
    return httpRequest.post('/auth/me');
  }
};

export default CommonApi;
