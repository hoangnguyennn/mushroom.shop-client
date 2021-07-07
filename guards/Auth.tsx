import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToken, loginByTokenAction } from '@redux/reducers/auth';

const Auth: FC = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(getToken());

  useEffect(() => {
    if (!token) {
      dispatch(loginByTokenAction());
    }
  }, [token]);

  return <>{children}</>;
};

export default Auth;
