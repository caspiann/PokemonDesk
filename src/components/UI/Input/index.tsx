import React from 'react';
import s from './Input.module.scss';

type TInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: TInput) => {
  return <input className={s.searchInput} type="text" value={value} onChange={onChange} />;
};

export default Input;
