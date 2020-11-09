import React from 'react';
import s from './Content.module.scss';

const Content: React.FC = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Content;
