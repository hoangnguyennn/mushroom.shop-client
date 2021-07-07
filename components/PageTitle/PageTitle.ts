import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';
import Container from '@components/core/Container';

export default styled.div`
  padding-top: 1.5rem;
  padding-bottom: 5.5rem;
  background-color: var(--dark);

  ${Container} {
    padding: 1rem;
  }

  .title {
    color: var(--white);
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  ${mediaQueries('lg')} {
    ${Container} {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
