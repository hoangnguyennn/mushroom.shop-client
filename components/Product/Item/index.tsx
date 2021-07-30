import { IProduct } from '@interfaces/index';
import { toCurrency } from '@utils/formatter';
import { FC } from 'react';
import RootStyled from './ProductItem';

type Props = IProduct;

const ProductItem: FC<Props> = ({ name, price, unit, images }) => {
  return (
    <RootStyled>
      <div className="wrap">
        <div className="thumbnail">
          <img src={images ? images[0].url : ''} alt="" />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="price">
            {toCurrency(price)} <span>/ {unit?.name}</span>
          </p>
        </div>
      </div>
    </RootStyled>
  );
};

export default ProductItem;
