import { Root } from './MenuMobile';

const MobileMenu = () => {
  return (
    <Root>
      <div className="overlay"></div>
      <div className="content">
        <div className="head">
          <div className="title">Menu</div>
          <div className="close">Close</div>
        </div>
        <div className="body"></div>
      </div>
    </Root>
  );
};

export default MobileMenu;
