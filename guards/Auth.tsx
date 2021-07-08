import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToken, loginByToken } from '@redux/reducers/auth';

const Auth: FC = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(getToken());

  useEffect(() => {
    if (!token) {
      dispatch(loginByToken());
    }
  }, [token]);

  return <>{children}</>;
};

export default Auth;
