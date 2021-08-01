import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import PageContentLayout from '@components/PageContent';
import MyAccount from '@features/MyAccount';
import MainLayout from '@layouts/MainLayout';
import { getIsUserFetched, getToken } from '@redux/reducers/auth.reducer';

const MyAccountPage = () => {
  const token = useSelector(getToken());
  const isUserFetched = useSelector(getIsUserFetched());
  const router = useRouter();

  useEffect(() => {
    if (isUserFetched && !token) {
      router.replace('/login');
    }
  }, [isUserFetched, token]);

  if (!token) {
    return <>Loading...</>;
  }

  return (
    <MainLayout>
      <PageContentLayout>
        <MyAccount />
      </PageContentLayout>
    </MainLayout>
  );
};

export default MyAccountPage;
