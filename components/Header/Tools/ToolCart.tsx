import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { ToolItem as RootStyled } from './Tools';

const ToolCart = () => {
  return (
    <Link href="/cart">
      <RootStyled className="cart">
        <div className="icon">
          <IoCartOutline size={20} />
          <div className="label">0</div>
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
