import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';

export default styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .user-info {
    margin-bottom: 3rem;
  }

  ${mediaQueries('lg')} {
    flex-direction: row;
    align-items: flex-start;

    .user-info,
    .update-password {
      padding: 1rem;
      margin-bottom: 0;
      border: 0.0625rem solid #dae1e7;
      border-radius: 0.5rem;
    }

    .user-info {
      flex: 2;
      margin-right: 1rem;
    }

    .update-password {
      flex: 1;
    }
  }
`;
