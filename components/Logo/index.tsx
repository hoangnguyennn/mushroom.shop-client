import Link from 'next/link';
import RootStyled from './Logo';

const Logo = () => {
  return (
    <RootStyled>
      <Link href="/">
        <a>Logo</a>
      </Link>
    </RootStyled>
  );
};

export default Logo;
