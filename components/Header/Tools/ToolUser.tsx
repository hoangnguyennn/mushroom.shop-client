import Link from 'next/link';
import { FC } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { ToolItem as RootStyled } from './Tools';

const ToolUser: FC = () => {
  return (
    <Link href="/login">
      <RootStyled className="user dropdown">
        <div className="icon">
          <IoPersonOutline size={20} />
        </div>
        <div className="text">
          <small>Tài khoản của tôi</small>
          <span>Nguyễn Văn Hoàng</span>
        </div>
      </RootStyled>
    </Link>
  );
};

export default ToolUser;
