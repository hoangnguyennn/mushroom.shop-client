import Link from 'next/link';
import { IoHomeOutline, IoChevronForwardOutline } from 'react-icons/io5';
import RootStyled from './Breadcrumb';

const Breadcrumb = () => {
  return (
    <RootStyled>
      <ul className="list">
        <li className="item">
          <Link href="/">
            <a>
              <IoHomeOutline className="icon" />
              Trang chủ
            </a>
          </Link>
        </li>
        <li className="item">
          <Link href="/">
            <a>
              <IoChevronForwardOutline className="icon" />
              <span>Đăng nhập</span>
            </a>
          </Link>
        </li>
      </ul>
    </RootStyled>
  );
};

export default Breadcrumb;
