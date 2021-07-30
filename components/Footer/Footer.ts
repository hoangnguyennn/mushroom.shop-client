import styled from 'styled-components';

export default styled.footer`
  .navigation {
    margin-top: 48px;
    padding-top: 48px;
    padding-bottom: 24px;
    background-color: #343a40;
  }

  .copyright {
    padding-top: 48px;
    padding-bottom: 24px;
    background-color: #242a30;
    color: #fff;

    .text {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      a {
        margin-right: 8px;
        color: #fff;
        text-decoration: none;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
