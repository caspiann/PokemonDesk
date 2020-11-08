import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  btnStyle?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, btnStyle }) => {
  return (
    <button type="button" className={cn(s.root, btnStyle)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
