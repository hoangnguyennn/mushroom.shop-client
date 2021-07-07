import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import LogoStyled from './Logo';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <LogoStyled>
      <Link href="/">
        <a>{t('Logo')}</a>
      </Link>
    </LogoStyled>
  );
};

export default Logo;
