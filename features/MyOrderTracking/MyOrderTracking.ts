import styled from 'styled-components';

export default styled.div`
  padding: 1rem;

  .order-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .order-id {
    color: var(--gray);
    font-size: 1.25rem;
  }

  .back-to-order-detail {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: var(--primary);
    text-decoration: none;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: linear;

    &:hover {
      color: var(--primary-hover);
      text-decoration: underline;
    }
  }

  .tracking-item {
    padding-top: 12px;
    padding-bottom: 12px;
    color: var(--gray);
    border-bottom: 1px solid rgb(238, 238, 238);

    &:nth-child(1) {
      border-top: 1px solid rgb(238, 238, 238);
      color: inherit;

      .status {
        font-weight: 700;
      }
    }
  }
`;
