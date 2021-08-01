import styled from 'styled-components';

type Props = {
  invalid?: boolean;
};

const InputStyled = styled.div<Props>`
  display: flex;
  position: relative;

  input {
    padding: 10px 22px;
    width: 100%;
    font-size: 15px;
    line-height: 1.5;
    border: 1px solid ${props => (props.invalid ? '#f72585' : '#dae1e7')};
    border-radius: 6px;
  }

  .placeholder-right {
    position: absolute;
    right: 0;
    top: 50%inherit;
    transform: translateY(-50%);
    padding-right: 22px;
    color: #676767;
    font-size: 0.8em;
    font-style: italic;
    user-select: none;
  }
`;

InputStyled.defaultProps = {
  invalid: false
};

export default InputStyled;
