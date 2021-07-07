import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';
import Container from '@components/core/Container';

export default styled.header`
  padding: 0.75rem 1rem;
  border-bottom: 0.0625rem solid #dae1e7;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tools {
    display: flex;

    .tool-item {
      display: flex;
      align-items: stretch;
      color: inherit;
      text-decoration: none;

      .icon {
        width: 2.875rem;
        height: 2.875rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .label {
          position: absolute;
          top: -0.3125rem;
          right: -0.3125rem;

          display: flex;
          justify-content: center;
          align-items: center;

          padding-left: 0.25rem;
          padding-right: 0.25rem;
          min-width: 1.25rem;
          height: 1.25rem;
          background-color: var(--primary);
          color: var(--white);
          font-size: 0.75rem;
          line-height: 1.25;
          border-radius: 0.625rem;
        }
      }

      .text {
        display: none;
        padding-left: 0.875rem;
        font-size: 0.875rem;
      }

      &.cart {
        height: 2.875rem;

        .icon {
          background-color: var(--light);
          border-radius: 50%;
        }

        small {
          height: 17px;
        }
      }
    }
  }

  ${mediaQueries('lg')} {
    .tools {
      .tool-item {
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 991.98px) {
    ${Container} {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
