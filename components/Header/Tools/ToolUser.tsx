import { useAppDispatch } from '@hooks/useAppDispatch';
import { getFullName, logout } from '@redux/reducers/auth.reducer';
import Link from 'next/link';
import { FC } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { ToolItem as RootStyled } from './Tools';

const ToolUser: FC = () => {
  const dispatch = useAppDispatch();
  const fullName = useSelector(getFullName());

  const handleLogout = () => {
    dispatch(logout());
  };

  if (fullName) {
    return (
      <RootStyled as="div" className="user dropdown">
        <div className="icon">
          <IoPersonOutline size={20} />
        </div>
        <div className="text">
          <small>Tài khoản của tôi</small>
          <span>{fullName}</span>
        </div>
        <div className="dropdown-menu">
          <Link href="/customer/orders">
            <a className="dropdown-item">Đơn hàng của tôi</a>
          </Link>

          <Link href="/customer/account">
            <a className="dropdown-item">Tài khoản của tôi</a>
          </Link>

          <span className="dropdown-item" onClick={handleLogout}>
            Đăng xuất
          </span>
        </div>
      </RootStyled>
    );
  }

  return (
    <Link href="/login">
      <RootStyled className="user">
        <div className="icon">
          <IoPersonOutline size={20} />
        </div>
        <div className="text">
          <small>Đăng nhập</small>
          <span>Tài khoản của tôi</span>
        </div>
      </RootStyled>
    </Link>
  );
};

export default ToolUser;
