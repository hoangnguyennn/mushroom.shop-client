import styled from 'styled-components';

export default styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  margin-bottom: 100px;
  background-image: linear-gradient(
    rgba(87, 87, 87, 0.53),
    rgba(13, 5, 1, 0.7)
  );
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  position: relative;

  .intro {
    .title {
      margin-bottom: 16px;
      color: #fff;
      font-size: 28px;
      font-weight: 300;
    }
  }
`;
