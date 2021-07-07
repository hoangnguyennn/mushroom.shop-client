import styled from 'styled-components';

import { Variant } from '@interfaces/types';

type ButtonProps = {
  variant?: Variant;
  shadow?: boolean;
  inline?: boolean;
  outline?: boolean;
};

const renderColor = (props: ButtonProps) => {
  if (props.outline) {
    return `var(--${props.variant})`;
  }

  return 'var(--white)';
};

const renderColorHover = () => 'var(--white)';

const renderBgColor = (props: ButtonProps) => {
  if (props.outline) {
    return 'var(--white)';
  }

  return `var(--${props.variant})`;
};

const renderBgColorHover = (props: ButtonProps) =>
  `var(--${props.variant}-hover)`;
const renderBorderColor = (props: ButtonProps) =>
  `var(--${props.variant}-hover)`;

const renderShadow = (props: ButtonProps) => {
  if (props.shadow) {
    return `0 0.5rem 1.125rem -0.5rem var(--${props.variant}-shadow)`;
  }
};

const Button = styled.button<ButtonProps>`
  padding: 0.625rem 1.373rem;
  width: ${props => (props.inline ? '' : '100%')};
  background-color: ${renderBgColor};
  color: ${renderColor};
  font-size: 1rem;
  text-align: center;
  border: 0.0625rem solid ${renderBorderColor};
  border-radius: 0.375rem;
  box-shadow: ${renderShadow};
  cursor: pointer;
  transition-property: color, background-color, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: linear;

  &:hover {
    background-color: ${renderBgColorHover};
    color: ${renderColorHover};
    border-color: ${renderBorderColor};
    box-shadow: unset;
  }

  &:disabled {
    background-color: var(--gray);
    border-color: var(--gray);
    box-shadow: ${renderShadow};
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variant: 'primary',
  shadow: false,
  inline: false,
  outline: false
};

export default Button;
