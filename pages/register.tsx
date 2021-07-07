import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { registerPage } from '@configs/breadcrumb';
import i18n from '@locales/index';
import MainLayout from '@layouts/MainLayout';
import PageContent from '@components/PageContent';
import Register from '@features/Register';

const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <PageContent breadcrumb={registerPage()} title={t('Register Account')}>
        <Register />
      </PageContent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { title: i18n.t('Register') }
  };
};

export default RegisterPage;
