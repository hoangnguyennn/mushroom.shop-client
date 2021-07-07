import { GetServerSideProps } from 'next';
import { useTranslation } from 'react-i18next';

import { initialStore } from '@redux/store';
import { loginPage } from '@configs/breadcrumb';
import { setDesktopAction } from '@redux/reducers/app';
import i18n from '@locales/index';
import isDesktop from '@helpers/isDesktop';
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

export const getServerSideProps: GetServerSideProps = async context => {
  const reduxStore = initialStore();
  const { dispatch } = reduxStore;

  const secChUaMobile = context.req.headers['sec-ch-ua-mobile'] as string;
  dispatch(setDesktopAction(isDesktop(secChUaMobile)));

  return {
    props: { initialReduxState: reduxStore.getState(), title: i18n.t('Login') }
  };
};

export default LoginPage;
