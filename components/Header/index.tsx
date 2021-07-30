import RootStyled from './Header';

import Logo from '@components/Logo';
import Container from '@components/core/Container';
import Tools from './Tools';

const Header = () => {
  return (
    <RootStyled>
      <Container>
        <Logo />

        <Tools />
      </Container>
    </RootStyled>
  );
};

export default Header;
