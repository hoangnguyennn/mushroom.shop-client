import Link from 'next/link';
import RootStyled from './Widget';

const Widget = () => {
  return (
    <RootStyled>
      <h3 className="title">Về chúng tôi</h3>
      <ul className="list">
        <li className="item">
          <Link href="/">
            <a>Về công ty</a>
          </Link>
        </li>
        <li className="item">
          <Link href="/">
            <a>Về team</a>
          </Link>
        </li>
        <li className="item">
          <Link href="/">
            <a>Liên hệ</a>
          </Link>
        </li>
        <li className="item">
          <Link href="/">
            <a>Tin tức</a>
          </Link>
        </li>
      </ul>
    </RootStyled>
  );
};

export default Widget;
