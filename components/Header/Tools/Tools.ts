import styled from 'styled-components';

export default styled.div`
  display: flex;
`;

export const ToolItem = styled.a`
  display: flex;
  align-items: stretch;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

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

  &.dropdown {
    .dropdown-menu {
      z-index: 2;
      display: none;
      position: absolute;
      top: 72px;
      left: 0;
      right: 0;
      padding: 12px;
      background-color: #fff;

      .dropdown-item {
        display: block;
        padding: 6px 12px;
        font-size: 14px;
        border-radius: 8px;

        &,
        & a {
          color: #231f20;
          text-decoration: none;
        }

        &:hover {
          background-color: #e2e6ea;
        }
      }
    }

    &:hover {
      .dropdown-menu {
        display: block;
      }
    }
  }
`;
