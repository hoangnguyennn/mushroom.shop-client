import { FC } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import ProductItem from '../Item';
import ProductListStyled from './ProductList';

import { addToCartAction } from '@redux/reducers/cart';
import { IProduct } from '@interfaces/index';
import { PATH_NAME } from '@configs/pathName';
import Button from '@components/core/Button';

type ProductListProps = {
  columns: number;
  'lg-columns': number;
  title?: string;
  viewMore?: boolean;
  items: IProduct[];
  [key: string]: any;
};

const ProductList: FC<ProductListProps> = ({
  title,
  viewMore = true,
  items,
  sorterUI,
  ...rest
}: ProductListProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <ProductListStyled hasTitle={!!title} {...rest}>
      {title ? <h3 className="title">{title}</h3> : null}
      {sorterUI}
      {items.length ? (
        <div className="list">
          {items.map(product => (
            <ProductItem
              key={product.id}
              link={`${PATH_NAME.PRODUCTS}/${product.id}`}
              addToCart={() => {
                dispatch(addToCartAction({ ...product, qty: 1 }));
                toast.info('add to cart');
              }}
              {...product}
            />
          ))}
        </div>
      ) : (
        <div className="not-found-products">
          {t('There are no products to display')}
        </div>
      )}
      {viewMore ? (
        <div className="view-more">
          <Link href={PATH_NAME.PRODUCTS}>
            <Button as="a" href={PATH_NAME.PRODUCTS} shadow outline>
              {t('More products')}
            </Button>
          </Link>
        </div>
      ) : null}
    </ProductListStyled>
  );
};

export default ProductList;
