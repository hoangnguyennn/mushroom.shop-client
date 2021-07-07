import { FC } from 'react';

import Container from '@components/core/Container';
import PageContentStyled from './PageContent';
import PageTitle, { PageTitleProps } from '@components/PageTitle';

type PageContentProps = PageTitleProps;

const PageContent: FC<PageContentProps> = ({ children, breadcrumb, title }) => {
  return (
    <>
      <PageTitle breadcrumb={breadcrumb} title={title} />
      <PageContentStyled>
        <Container>
          <div className="page-content">{children}</div>
        </Container>
      </PageContentStyled>
    </>
  );
};

export default PageContent;
