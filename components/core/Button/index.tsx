import styled from 'styled-components';

type Props = {
  inline?: boolean;
};

const Button = styled.button<Props>`
  padding: 10px 22px;
  width: ${props => (props.inline ? '' : '100%')};
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  background-color: #4361ee;
  color: #fff;
  border: 1px solid #4361ee;
  border-radius: 6px;
  cursor: pointer;
`;

Button.defaultProps = {
  inline: true
};

export default Button;
