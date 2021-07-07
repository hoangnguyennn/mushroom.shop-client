import { InputHTMLAttributes, FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  position: relative;

  input {
    padding: 0.625rem 1.373rem;
    width: 100%;
    font-size: 1rem;
    border: 0.0625rem solid #dae1e7;
    border-radius: 0.375rem;
  }

  > .right-placeholder {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 1.373rem;
    color: #676767;
    font-size: 0.8em;
    font-style: italic;
    user-select: none;
  }
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightPlaceholder?: string;
};

const Input: FC<InputProps> = ({ rightPlaceholder, ...rest }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isShowRightPlaceholder, setIsShowRightPlaceholder] = useState(true);

  useEffect(() => {
    setIsShowRightPlaceholder(!inputRef.current?.value);
  }, [inputRef.current?.value]);

  return (
    <Root>
      <input ref={inputRef} {...rest} />
      {isShowRightPlaceholder && rightPlaceholder && (
        <span className="right-placeholder">{rightPlaceholder}</span>
      )}
    </Root>
  );
};

export default Input;
