import BootstrapSpacing from './bootstrap-spacing';
import Custom from './custom';
import Font from './fonts';
import NProgress from './nprogress';
import Variable from './variables';

const GlobalStyle = () => (
  <>
    <Variable />
    <Font />
    <Custom />
    <BootstrapSpacing />
    <NProgress />
  </>
);

export default GlobalStyle;
