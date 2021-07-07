import styled from 'styled-components';

export default styled.div`
  overflow-x: auto;
  padding: 1rem;

  .order-list {
    width: 100%;
    border-collapse: collapse;

    tr {
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: linear;

      &:hover {
        background-color: var(--order-hover);
      }
    }

    th,
    td {
      padding: 1rem;
      font-size: 0.9375rem;
      font-weight: 400;
      text-align: left;
      border-bottom: 0.0625rem solid var(--light);

      &:last-child {
        text-align: right;
      }
    }

    .order-id {
      color: var(--primary);
      text-decoration: none;
    }
  }
`;
