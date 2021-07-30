import styled from 'styled-components';

export default styled.div`
  display: flex;
`;

export const ToolItem = styled.a`
  display: flex;
  align-items: stretch;
  color: inherit;
  text-decoration: none;

  .icon {
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .label {
      position: absolute;
      top: -5px;
      right: -5px;

      display: flex;
      justify-content: center;
      align-items: center;

      padding-left: 4px;
      padding-right: 4px;
      min-width: 20px;
      height: 20px;
      background-color: #4361ee;
      color: #fff;
      font-size: 12px;
      line-height: 1.25;
      border-radius: 10px;
    }
  }

  .text {
    display: none;
    padding-left: 14px;
    font-size: 14px;
  }

  &.cart {
    .icon {
      background-color: #f8f9fa;
      border-radius: 50%;
    }
  }

  &:not(:first-child) {
    margin-left: 16px;
  }
`;
