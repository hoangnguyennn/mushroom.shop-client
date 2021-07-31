import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';

import Auth from '@guards/Auth';
import GlobalStyle from '@assets/styles';
import storeWrapper from '@redux/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = storeWrapper.getStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  );
};

export default MyApp;
