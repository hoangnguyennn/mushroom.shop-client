import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';

export default styled.div`
  margin-right: 0.5rem;
  padding-top: 0.65625rem;
  padding-bottom: 0.65625rem;
  width: 4.625rem;

  a {
    display: flex;
    align-items: center;
    color: var(--main-text-color);
    text-decoration: none;

    img {
      width: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }

  ${mediaQueries('lg')} {
    width: 8.875rem;
  }
`;
