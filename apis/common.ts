import httpRequest from '@services/httpRequest';

const CommonApi = {
  fetchTrendingProducts: () => {
    return httpRequest.get('/products/trending');
  }
};

export default CommonApi;
