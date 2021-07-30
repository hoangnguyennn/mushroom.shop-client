import styled from 'styled-components';

export default styled.a`
  margin-bottom: 16px;
  width: 100%;
  text-decoration: none;
  background-color: #fff;

  position: relative;

  .thumbnail {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .info {
    padding-top: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e3e9ef;

    .name {
      margin-bottom: 8px;
      color: #627182;
      font-size: 14px;
      font-weight: 500;
    }

    .price {
      color: #4361ee;
      font-size: 15px;
    }
  }
`;
