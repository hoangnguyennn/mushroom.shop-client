import styled from 'styled-components';

export default styled.div`
  padding: 1rem;

  .info {
    display: flex;
    margin-bottom: 1rem;

    .info-item {
      flex: 1;
      padding: 1rem;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      .content {
        p {
          margin-top: 1rem;
        }
      }
    }
  }

  .table-wrap {
    width: 100%;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      font-weight: 400;
      text-align: left;

      div {
        display: flex;
        align-items: flex-start;
      }

      &:last-child {
        text-align: right;
      }
    }

    thead,
    tbody {
      th,
      td {
        padding: 1rem;
        border-bottom: 1px solid var(--light);
      }

      td {
        vertical-align: top;

        img {
          margin-right: 1rem;
          width: 5rem;
          height: 5rem;
          object-fit: contain;
        }
      }
    }

    .product-info {
      display: flex;
      flex-direction: column;

      a {
        color: inherit;
        text-decoration: none;
        margin-bottom: 0.75rem;
        transition-property: color;
        transition-duration: 0.3s;
        transition-timing-function: linear;

        &:hover {
          color: var(--primary);
        }
      }

      .actions {
        font-size: 0.75rem;

        span {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }

          &:not(:last-child) {
            margin-right: 0.75rem;
          }
        }
      }
    }

    tfoot {
      td {
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
        text-align: right;

        &:first-child {
          color: var(--gray-2);
        }

        &.price {
          color: var(--primary);
        }

        &.total-price {
          font-size: 1.125rem;
          font-weight: 700;
        }
      }

      tr:first-child {
        td {
          padding-top: 2rem;
        }
      }
    }
  }

  .back-to-my-orders {
    padding: 1rem;
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
`;
