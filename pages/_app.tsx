import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';

import GlobalStyle from '@assets/styles';
import useStore from '@redux/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
