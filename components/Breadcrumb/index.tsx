import { FC } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import { IBreadcrumb } from '@interfaces/index';
import BreadcrumbStyled from './Breadcrumb';

type BreadcrumbProps = {
  breadcrumb: IBreadcrumb[];
};

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumb }: BreadcrumbProps) => {
  const lastIndex = breadcrumb.length - 1;

  return (
    <BreadcrumbStyled>
      <ul className="list">
        {breadcrumb.map((item, index) => {
          return (
            <li className="item" key={item.id}>
              {index === lastIndex ? (
                <>
                  <div className="icon czi-arrow-right"></div>
                  <span>{item.name}</span>
                </>
              ) : (
                <>
                  <div
                    className={classnames({
                      icon: true,
                      'czi-arrow-right': index !== 0
                    })}
                  ></div>
                  <Link href={item.url}>
                    <a>{item.name}</a>
                  </Link>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
