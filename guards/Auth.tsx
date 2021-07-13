import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { getToken, loginByToken } from '@redux/reducers/auth';

const Auth: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken());

  useEffect(() => {
    if (!token) {
      dispatch(loginByToken());
    }
  }, [token]);

  return <>{children}</>;
};

export default Auth;
