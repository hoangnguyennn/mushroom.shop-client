import FormGroup from '@components/core/FormGroup';
import styled from 'styled-components';

export default styled.div`
  padding: 16px;

  .cart-sidebar {
    margin-bottom: 48px;

    .cart-detail {
      .cart-item {
        padding-top: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #dae1e7;
        display: flex;

        .thumbnail {
          width: 90px;
          height: 90px;
          display: flex;
          background-color: rgba(0, 0, 0, 0.1);

          img {
            width: 100%;
            max-width: 100%;
            object-fit: contain;
          }
        }

        .info {
          flex: 1;
          padding-left: 16px;
          padding-right: 16px;

          .name {
            margin-bottom: 10px;
            color: inherit;
            font-size: 14px;
            text-decoration: none;

            &:hover {
              color: #4361ee;
              text-decoration: underline;
            }
          }

          .qty {
            display: flex;

            span,
            input {
              width: 28px;
              height: 28px;
              border-top: 1px solid #eee;
              border-bottom: 1px solid #eee;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            input {
              color: #4361ee;
              font-size: 700;
              text-align: center;
              border-left: 1px solid #eee;
              border-right: 1px solid #eee;
            }

            &-decrease {
              border-left: 1px solid #eee;
            }

            &-increase {
              border-right: 1px solid #eee;
            }

            &-decrease,
            &-increase {
              cursor: pointer;
              user-select: none;

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
            color: #627182;
            font-size: 14px;
            cursor: pointer;

            &:hover {
              text-decoration: underline;
            }
          }

          .price {
            flex: 1;
            font-size: 14px;
            font-weight: 700;

            display: flex;
            align-items: flex-end;
          }
        }
      }
    }

    .cart-summary {
      padding-top: 16px;

      ${FormGroup} {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .price {
        color: #4361ee;
      }

      .total-price {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

  .cart-main {
    .checkout-info {
      margin-bottom: 48px;
    }

    .payment-method {
      margin-bottom: 16px;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      border: 1px solid #dae1e7;
      border-radius: 6px;
      cursor: pointer;

      input {
        display: none;
      }

      h4 {
        font-weight: 400;
      }
    }
  }
`;
