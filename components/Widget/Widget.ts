import styled from 'styled-components';

export default styled.div`
  margin-bottom: 1.5rem;

  .title {
    margin-bottom: 1.125rem;
    color: var(--white);
    font-size: 1.0625rem;
  }

  .list {
    .item {
      margin-bottom: 0.375rem;
      color: var(--gray);
      font-size: 0.875rem;
      transition-property: color;
      transition-duration: 0.3s;
      transition-timing-function: linear;

      a {
        color: inherit;
        text-decoration: none;
      }

      &:hover {
        color: var(--white);
      }
    }
  }
`;
