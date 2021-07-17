import { ENDPOINT } from '@configs/endpoint';
import {
  ICategoryWithProductLength,
  ILogin,
  ILoginResponse,
  IObject,
  IOrder,
  IOrderResponse,
  IPaymentMethod,
  IProduct,
  IProductUnitWithLength,
  IUser,
  IUserCreate,
  IUserUpdate
} from '@interfaces/index';
import httpRequest from '@services/httpRequest';

export const fetchCategoriesApi = async (
  query: IObject
): Promise<ICategoryWithProductLength> => {
  const params = { ...query, 'with-product-length': 'true' };
  return httpRequest.get(ENDPOINT.categories, { params });
};

export const fetchOrdersApi = async (): Promise<IOrderResponse[]> => {
  return httpRequest.get(ENDPOINT.orders);
};

export const fetchPaymentMethodsApi = async (): Promise<IPaymentMethod[]> => {
  return httpRequest.get(ENDPOINT.paymentMethods);
};

export const fetchProductByIdApi = async (id: string): Promise<IProduct> => {
  return httpRequest.get(`${ENDPOINT.products}/${id}`);
};

export const fetchProductsApi = async (
  query: IObject
): Promise<{ data: IProduct[]; total: number }> => {
  return httpRequest.get(ENDPOINT.products, { params: query });
};

export const fetchProductsByCategorySlugApi = async (
  slug: string,
  query: IObject
) => {
  const url = `${ENDPOINT.categories}/slug/${slug}${ENDPOINT.products}`;
  return httpRequest.get(url, { params: query });
};

export const fetchProductUnitsApi = async (
  query?: IObject
): Promise<IProductUnitWithLength> => {
  const params = { ...query, 'with-product-length': 'true' };
  return httpRequest.get(ENDPOINT.productUnits, { params });
};

export const fetchTrackingApi = async (orderId: string) => {
  return httpRequest.get(`${ENDPOINT.orders}/${orderId}/tracking`);
};

export const fetchTrendingProductsApi = async (): Promise<IProduct[]> => {
  return httpRequest.get(ENDPOINT.trendingProducts);
};

export const loginApi = async (credential: ILogin): Promise<ILoginResponse> => {
  return httpRequest.post(ENDPOINT.login, credential);
};

export const loginByTokenApi = async (): Promise<IUser> => {
  return httpRequest.post(ENDPOINT.me);
};

export const orderApi = async (order: IOrder): Promise<IOrderResponse> => {
  return httpRequest.post(ENDPOINT.orders, order);
};

export const registerApi = async (user: IUserCreate): Promise<IUser> => {
  return httpRequest.post(ENDPOINT.register, user);
};

export const updateUserInfoApi = async (
  userId: string,
  userInfo: IUserUpdate
): Promise<IUser> => {
  return httpRequest.patch(`${ENDPOINT.users}/${userId}`, userInfo);
};
