import PageContentLayout from '@components/PageContent';
import Login from '@features/Login';
import MainLayout from '@layouts/MainLayout';

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
