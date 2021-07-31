import { KeyboardEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import RootStyled from './ProductSummary';
import Button from '@components/core/Button';
import Input from '@components/core/Input';

import { getProduct } from '@redux/reducers/product.reducer';
import { toCurrency } from '@utils/formatter';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { addToCart } from '@redux/reducers/cart.reducer';

const ProductSummary = () => {
  const product = useSelector(getProduct());
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState('1');

  const handleKeyUp = (event: KeyboardEvent) => {
    event.key === 'e' && event.preventDefault();
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qty: Number(qty) }));
  };

  return (
    <RootStyled>
      <div className="summary">
        <div className="thumbnail">
          <img src={product.images[0].url} alt={product.name} />
        </div>
        <div className="info">
          <p className="price">{toCurrency(product.price)}</p>
          <div className="add-to-cart">
            <div className="qty">
              <Input
                type="number"
                min="1"
                value={qty}
                onChange={event => setQty(event.target.value)}
                onKeyUp={handleKeyUp}
              />
            </div>
            <Button inline={false} onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </Button>
          </div>
          <div className="description">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        </div>
      </div>
    </RootStyled>
  );
};

export default ProductSummary;
