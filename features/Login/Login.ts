import styled from 'styled-components';

export default styled.form`
  padding: 20px;
  font-size: 14px;

  label {
    display: inline-block;
    margin-bottom: 6px;
  }

  .forgot-password {
    display: flex;
    justify-content: flex-end;

    a {
      color: #4361ee;
      text-decoration: none;
    }
  }

  .goto-signup {
    text-align: center;

    a {
      color: #4361ee;
    }
  }
`;
