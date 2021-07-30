import Button from '@components/core/Button';
import { IProduct } from '@interfaces/index';
import Link from 'next/link';
import { FC } from 'react';
import ProductItem from '../Item';
import RootStyled from './ProductList';

type Props = {
  list: IProduct[];
};

const ProductList: FC<Props> = ({ list }) => {
  return (
    <RootStyled>
      <h3 className="title">Sản phẩm</h3>
      <div className="list">
        {list.map(item => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      <div className="view-more">
        <Link href="/products">
          <Button>Xem thêm</Button>
        </Link>
      </div>
    </RootStyled>
  );
};

export default ProductList;
