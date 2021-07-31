import Breadcrumb from '@components/Breadcrumb';
import Container from '@components/core/Container';
import { FC } from 'react';
import RootStyled from './PageContent';

const PageContentLayout: FC = ({ children }) => {
  return (
    <RootStyled>
      <div className="page-title">
        <Container>
          <Breadcrumb />
          <h3 className="title">Đăng nhập</h3>
        </Container>
      </div>
      <div className="page-content">
        <Container>
          <div className="content">{children}</div>
        </Container>
      </div>
    </RootStyled>
  );
};

export default PageContentLayout;
