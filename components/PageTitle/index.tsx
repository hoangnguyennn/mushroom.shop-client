import { FC } from 'react';

import PageTitleStyled from './PageTitle';

import { IBreadcrumb } from '@interfaces/index';
import Breadcrumb from '@components/Breadcrumb';
import Container from '@components/core/Container';

export type PageTitleProps = {
  breadcrumb: IBreadcrumb[];
  title: string;
};

const PageTitle: FC<PageTitleProps> = ({
  breadcrumb,
  title
}: PageTitleProps) => {
  return (
    <PageTitleStyled>
      <Container>
        <Breadcrumb breadcrumb={breadcrumb} />
        <h3 className="title">{title}</h3>
      </Container>
    </PageTitleStyled>
  );
};

export default PageTitle;
