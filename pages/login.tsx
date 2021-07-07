import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { loginPage } from '@configs/breadcrumb';
import i18n from '@locales/index';
import Login from '@features/Login';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={loginPage()} title={t('Login')}>
        <Login />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('Login') }
  };
};

export default LoginPage;
