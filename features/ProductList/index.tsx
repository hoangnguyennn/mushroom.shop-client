import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Root from './ProductList';

import ProductFilter from './components/Filter';
import ProductListComponent from '@components/Product/List';

import { getIsDesktop } from '@redux/reducers/app';
import { IProduct } from '@interfaces/index';

type ProductListProps = {
  products: IProduct[];
  title?: string;
};

const ProductList: FC<ProductListProps> = ({
  products,
  title = 'Products'
}) => {
  const isDesktop = useSelector(getIsDesktop());
  const { t } = useTranslation();

  return (
    <Root>
      {isDesktop && <ProductFilter className="filter" />}
      <ProductListComponent
        columns={1}
        lg-columns={3}
        items={products}
        viewMore={false}
        title={isDesktop && t(title)}
        className="product-list"
      />
    </Root>
  );
};

export default ProductList;
