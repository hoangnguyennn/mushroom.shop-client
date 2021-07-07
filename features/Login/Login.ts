import styled from 'styled-components';
import Form from '@components/core/Form';
import { mediaQueries } from '@helpers/checkTypes';

export default styled(Form)`
  padding: 1rem;

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

  .sign-up {
    padding-top: 1rem;
    text-align: center;

    a {
      color: var(--primary);
      transition-property: color;
      transition-duration: 0.3s;
      transition-timing-function: linear;

      &:hover {
        color: var(--primary-hover);
      }
    }
  }

  ${mediaQueries('lg')} {
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
`;
