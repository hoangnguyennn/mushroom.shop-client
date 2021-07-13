import { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { logout } from '@redux/reducers/auth';
import { PATH_NAME } from '@configs/pathName';
import Root from './User';

type UserProps = {
  fullName: string;
};

const User: FC<UserProps> = ({ fullName }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        router.replace(PATH_NAME.HOME);
      });
  };

  return (
    <Root>
      <div className="tool-item user dropdown">
        <div className="icon">
          <i className="czi-user"></i>
        </div>
        <div className="text ml-n2">
          <small>{t('My Account')}</small>
          <span>{fullName}</span>
        </div>
        <div className="dropdown-menu">
          <Link href={PATH_NAME.MY_ORDER}>
            <a className="dropdown-item">{t('My orders')}</a>
          </Link>

          <Link href={PATH_NAME.MY_ACCOUNT}>
            <a className="dropdown-item">{t('My account')}</a>
          </Link>

          <span className="dropdown-item" onClick={handleLogout}>
            {t('Logout')}
          </span>
        </div>
      </div>
    </Root>
  );
};

export default User;
