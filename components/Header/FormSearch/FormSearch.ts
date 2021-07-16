import { mediaQueries } from '@helpers/checkTypes';
import styled from 'styled-components';

export default styled.form`
  display: none;

  ${mediaQueries('lg')} {
    flex: 1;
    display: block;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    position: relative;

    .form-search {
      &__input {
        outline: none;
        transition-property: color, background-color, box-shadow;
        transition-duration: 0.3s;
        transition-timing-function: linear;
        padding-right: 40px;

        &:focus {
          box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-shadow);
        }
      }

      &__submit {
        position: absolute;
        right: 0;
        top: 0;
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        outline: none;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
