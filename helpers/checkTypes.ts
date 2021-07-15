import { ICartItem, IObject } from '@interfaces/index';
import { variant } from '@interfaces/types';

export const isProductInCart = (product: IObject): product is ICartItem => {
  return (
    'id' in product &&
    'name' in product &&
    'price' in product &&
    'description' in product &&
    'unit' in product &&
    'images' in product &&
    'qty' in product
  );
};

export const isVariant = (key: string): boolean => {
  return variant.includes(key);
};

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

export const mediaQueries = (breakpoint: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[breakpoint]})`;
};
