import PageContentLayout from '@components/PageContent';
import MainLayout from '@layouts/MainLayout';
import Login from '@features/Login';

const LoginPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <Login />
      </PageContentLayout>
    </MainLayout>
  );
};

export default LoginPage;
