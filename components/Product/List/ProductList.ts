import styled from 'styled-components';

export default styled.div`
  .title {
    margin-bottom: 12px;
    color: #627182;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  .list {
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;

    > * {
      width: 100%;
    }
  }

  .view-more {
    padding-top: 48px;
    text-align: center;
  }
`;
