import Container from '@components/core/Container';
import styled from 'styled-components';

export default styled.div`
  .page-title {
    padding-top: 24px;
    padding-bottom: 88px;
    background-color: #343a40;

    ${Container} {
      padding: 16px;
    }

    .title {
      color: #fff;
      font-size: 28px;
      font-weight: 500;
      line-height: 1.2;
      text-align: center;
    }
  }

  .page-content {
    margin-top: -78px;

    .content {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 5px 25px -6px rgb(0 0 0 / 10%);
    }
  }
`;
