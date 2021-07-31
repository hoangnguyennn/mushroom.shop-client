import { getCartLength } from '@redux/reducers/cart.reducer';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { ToolItem as RootStyled } from './Tools';

const ToolCart = () => {
  const cartLength = useSelector(getCartLength());

  return (
    <Link href="/cart">
      <RootStyled className="cart">
        <div className="icon">
          <IoCartOutline size={20} />
          <div className="label">{cartLength}</div>
        </div>
        <div className="text">
          <small></small>
          <span>Giỏ hàng</span>
        </div>
      </RootStyled>
    </Link>
  );
};

export default ToolCart;
