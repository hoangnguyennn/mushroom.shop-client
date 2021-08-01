import styled from 'styled-components';

export default styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 32px;
    padding-bottom: 32px;
    color: #373f50;

    img {
      width: 100%;
      max-width: 100%;
      height: 300px;
      margin-bottom: 48px;
      object-fit: contain;
    }

    h2 {
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 24px;
      text-align: center;
    }

    .back-to-home {
      &,
      & * {
        text-decoration: none;
      }
    }
  }
`;
