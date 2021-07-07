import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';

export default styled.div`
  margin-bottom: 1rem;

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      align-items: center;

      > * {
        color: var(--white);
        font-size: 0.8125rem;
        text-decoration: none;
      }

      &:last-child {
        span {
          color: rgba(255, 255, 255, 0.6);
        }
      }

      &:not(:first-child) {
        padding-left: 0.425rem;

        .icon {
          padding-right: 0.425rem;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.8rem;
        }
      }

      a {
        display: flex;
        align-items: center;

        i {
          margin-right: 0.25rem;
        }
      }
    }
  }

  ${mediaQueries('lg')} {
    margin-bottom: 0;
  }
`;
