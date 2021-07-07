import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';

export default styled.div`
  display: flex;
  padding: 1rem;

  ${mediaQueries('lg')} {
    padding: 0;

    .filter {
      flex: 1;
      max-width: calc(100% / 4);
    }

    .product-list {
      flex: 3;
      max-width: calc(100% / 4 * 3);
    }
  }
`;
