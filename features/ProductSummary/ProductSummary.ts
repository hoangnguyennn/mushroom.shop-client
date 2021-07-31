import styled from 'styled-components';

export default styled.div`
  .summary {
    display: flex;
    flex-direction: column;
    padding: 16px;

    .thumbnail {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;

      img:nth-child(1) {
        width: 100%;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.1);
        z-index: 2;
      }
    }

    .info {
      padding-top: 24px;
    }

    .price {
      margin-bottom: 16px;
      color: #4361ee;
      font-size: 28px;
    }

    .add-to-cart {
      margin-bottom: 30px;

      .qty {
        margin-bottom: 8px;

        input {
          padding: 10px 16px;
          text-align: center;
        }
      }
    }
  }
`;
