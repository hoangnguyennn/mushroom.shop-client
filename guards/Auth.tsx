import { useAppDispatch } from '@hooks/useAppDispatch';
import {
  getToken,
  loginByToken,
  setIsUserFetched
} from '@redux/reducers/auth.reducer';
import { useEffect } from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Auth: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken());

  useEffect(() => {
    const tokenInLocalStorage = localStorage.getItem('access-token');

    if (tokenInLocalStorage && !token) {
      dispatch(loginByToken()).finally(() => {
        dispatch(setIsUserFetched(true));
      });
    } else {
      dispatch(setIsUserFetched(true));
    }
  }, [token]);

  return <>{children}</>;
};

export default Auth;
