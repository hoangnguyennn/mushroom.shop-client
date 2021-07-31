import { useAppDispatch } from '@hooks/useAppDispatch';
import { getToken, loginByToken } from '@redux/reducers/auth.reducer';
import { useEffect } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Auth: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken());

  useEffect(() => {
    !token && dispatch(loginByToken());
  }, [token]);

  return <>{children}</>;
};

export default Auth;
