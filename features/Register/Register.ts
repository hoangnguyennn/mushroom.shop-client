import styled from 'styled-components';
import { mediaQueries } from '@helpers/checkTypes';

export default styled.div`
  padding: 1rem;

  .register-form {
    .submit-group {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .sign-in {
    text-align: center;

    span {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    a {
      color: var(--primary);
      text-decoration: none;
      transition-property: color;
      transition-duration: 0.3s;
      transition-timing-function: linear;

      &:hover {
        color: var(--primary-hover);
      }
    }
  }

  ${mediaQueries('lg')} {
    .register-form {
      width: 40%;
      margin-left: auto;
      margin-right: auto;

      .submit {
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
