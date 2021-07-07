import styled from 'styled-components';
import { mediaQueries } from '@helpers/checkTypes';

type RootProps = {
  columns: number;
  'lg-columns': number;
  hasTitle?: boolean;
  [key: string]: any;
};

const ProductList = styled.div<RootProps>`
  .title {
    margin-bottom: 0.75rem;
    color: var(--main-text-color);
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  .list {
    padding-top: ${props => (props.hasTitle ? '1.5rem' : '0')};
    display: flex;
    flex-wrap: wrap;

    > * {
      width: calc(100% / ${props => props.columns});
    }
  }

  .not-found-products {
    margin: 1rem;
    padding: 1rem 1.5rem;
    color: var(--danger);
    border: 0.0625rem solid var(--danger);
    border-radius: 0.25rem;
  }

  .view-more {
    padding-top: 3rem;
    text-align: center;

    a {
      text-decoration: none;
    }
  }

  ${mediaQueries('lg')} {
    padding-top: ${props => (props.hasTitle ? '1rem' : '0')};

    .list {
      > * {
        width: calc(100% / ${props => props['lg-columns']});
      }
    }
  }
`;

ProductList.defaultProps = {
  columns: 1,
  'lg-columns': 5,
  hasTitle: false
};

export default ProductList;
