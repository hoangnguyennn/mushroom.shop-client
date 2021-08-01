import PageContentLayout from '@components/PageContent';
import MyAccount from '@features/MyAccount';
import MainLayout from '@layouts/MainLayout';

const MyAccountPage = () => {
  return (
    <MainLayout>
      <PageContentLayout>
        <MyAccount />
      </PageContentLayout>
    </MainLayout>
  );
};

export default MyAccountPage;
