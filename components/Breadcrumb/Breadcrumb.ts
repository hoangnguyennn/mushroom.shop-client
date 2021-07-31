import styled from 'styled-components';

export default styled.div`
  margin-bottom: 16px;

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      align-items: center;

      > * {
        display: flex;
        align-items: center;
        color: white;
        font-size: 14px;
        text-decoration: none;
      }

      .icon {
        margin-right: 4px;
      }

      &:last-child {
        span {
          color: rgba(255, 255, 255, 0.6);
        }
      }

      &:not(:first-child) {
        padding-left: 7px;
      }
    }
  }
`;
