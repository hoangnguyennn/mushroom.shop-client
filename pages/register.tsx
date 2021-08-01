import PageContentLayout from '@components/PageContent';
import Register from '@features/Register';
import MainLayout from '@layouts/MainLayout';

const RegisterPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <Register />
      </PageContentLayout>
    </MainLayout>
  );
};

export default RegisterPage;
