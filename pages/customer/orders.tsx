import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import PageContentLayout from '@components/PageContent';
import MainLayout from '@layouts/MainLayout';
import { getToken, getIsUserFetched } from '@redux/reducers/auth.reducer';

const MyOrdersPage = () => {
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
      <PageContentLayout></PageContentLayout>
    </MainLayout>
  );
};

export default MyOrdersPage;
