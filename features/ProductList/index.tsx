import { useSelector } from 'react-redux';

import RootStyled from './ProductList';
import ProductListComponent from '@components/Product/List';

import { getProducts } from '@redux/reducers/product.reducer';

const ProductList = () => {
  const products = useSelector(getProducts());

  return (
    <RootStyled>
      <ProductListComponent list={products} />
    </RootStyled>
  );
};

export default ProductList;
