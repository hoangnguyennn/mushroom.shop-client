import Button from '@components/core/Button';
import { IProduct } from '@interfaces/index';
import Link from 'next/link';
import { FC } from 'react';
import ProductItem from '../Item';
import RootStyled from './ProductList';

type Props = {
  list: IProduct[];
  viewMore?: boolean;
};

const ProductList: FC<Props> = ({ list, viewMore }) => {
  return (
    <RootStyled>
      <h3 className="title">Sản phẩm</h3>
      <div className="list">
        {list.map(item => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
      {viewMore && (
        <div className="view-more">
          <Link href="/products">
            <Button>Xem thêm</Button>
          </Link>
        </div>
      )}
    </RootStyled>
  );
};

export default ProductList;
