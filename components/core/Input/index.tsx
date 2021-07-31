import { FC } from 'react';
import { InputHTMLAttributes } from 'react';
import RootStyled from './Input';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholderRight?: string;
};

const Input: FC<Props> = ({ placeholderRight, ...inputProps }) => {
  return (
    <RootStyled>
      <input {...inputProps} />
      <span className="placeholder-right">{placeholderRight}</span>
    </RootStyled>
  );
};

export default Input;
