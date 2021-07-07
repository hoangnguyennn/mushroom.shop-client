import styled from 'styled-components';

import { mediaQueries } from '@helpers/checkTypes';
import FormGroup from '@components/core/FormGroup';

export default styled.div`
  padding: 1rem;

  .cart-sidebar {
    margin-bottom: 3rem;

    .cart-detail {
      .cart-item {
        padding-bottom: 0.5rem;
        border-bottom: 0.0625rem solid #dae1e7;
        display: flex;

        .thumbnail {
          width: 5rem;
          display: flex;

          img {
            width: 100%;
            max-width: 100%;
            object-fit: contain;
          }
        }

        .info {
          flex: 1;
          padding-left: 1rem;
          padding-right: 1rem;

          .name {
            margin-bottom: 0.625rem;
            color: inherit;
            font-size: 0.8125rem;
            text-decoration: none;
            transition-property: color;
            transition-duration: 0.3s;
            transition-timing-function: linear;

            &:hover {
              color: var(--primary);
              text-decoration: underline;
            }
          }

          .qty {
            display: flex;

            span,
            input {
              width: 1.75rem;
              height: 1.75rem;
              border-top: 0.0625rem solid #eee;
              border-bottom: 0.0625rem solid #eee;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            input {
              color: var(--primary);
              font-weight: 700;
              text-align: center;
              border-left: 0.0625rem solid #eee;
              border-right: 0.0625rem solid #eee;
            }

            .qty-decreace {
              border-left: 0.0625rem solid #eee;
            }

            .qty-increase {
              border-right: 0.0625rem solid #eee;
            }

            .qty-decreace,
            .qty-increase {
              cursor: pointer;
              user-select: none;
              transition-property: color, background-color;
              transition-duration: 0.3s;
              transition-timing-function: linear;

              &:hover {
                background-color: #aaa;
              }
            }
          }
        }

        .actions {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .action {
            color: var(--main-text-color);
            font-size: 0.8125rem;
            transition-property: color, background-color;
            transition-duration: 0.3s;
            transition-timing-function: linear;

            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .price {
            flex: 1;
            font-size: 0.8125rem;
            font-weight: 700;

            display: flex;
            align-items: flex-end;
          }
        }
      }
    }

    .cart-summary {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 0.0625rem solid #dae1e7;

      ${FormGroup} {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .price {
        color: var(--primary);
      }

      .total-price {
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }

  .cart-main {
    .checkout-information {
      margin-bottom: 3rem;
    }

    .payment-method {
      margin-bottom: 1rem;
      padding: 0.625rem 1rem;
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--gray);
      border-radius: 0.375rem;
      cursor: pointer;
      transition: none;

      * {
        transition: none;
      }

      input {
        display: none;
      }

      .icon {
        margin-right: 1.25rem;
      }

      h4 {
        font-weight: 400;
      }

      &.active {
        background-color: var(--light);
        color: var(--primary);
        border-color: var(--primary);

        .icon {
          color: var(--primary);
        }
      }
    }
  }

  ${mediaQueries('lg')} {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;

    .cart-sidebar {
      flex: 2;
    }

    .cart-main {
      flex: 3;
      margin-right: 1rem;
    }

    .cart-sidebar,
    .cart-main {
      padding: 1rem;
      margin-bottom: 0;
      border: 0.0625rem solid #dae1e7;
      border-radius: 0.5rem;
    }
  }
`;
