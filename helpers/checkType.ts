import { ICartItem, IObject } from '@interfaces/index';

export const isProduct = (product: IObject): product is ICartItem => {
  return (
    'id' in product &&
    'name' in product &&
    'price' in product &&
    'description' in product &&
    'status' in product &&
    'longDescription' in product &&
    'unit' in product &&
    'images' in product &&
    'category' in product &&
    'qty' in product
  );
};
