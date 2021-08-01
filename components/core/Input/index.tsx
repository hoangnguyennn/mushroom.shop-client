import { FC } from 'react';
import { InputHTMLAttributes } from 'react';
import RootStyled from './Input';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  placeholderRight?: string;
  invalid?: boolean;
};

const Input: FC<Props> = ({ placeholderRight, invalid, ...inputProps }) => {
  return (
    <RootStyled invalid={invalid}>
      <input {...inputProps} />
      <span className="placeholder-right">{placeholderRight}</span>
    </RootStyled>
  );
};

export default Input;
