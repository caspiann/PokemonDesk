import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface IHeadingProps {
  children: React.ReactNode;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingStyle?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, level, headingStyle }) => {
  return React.createElement(level, { className: cn(`${s.heading}`, headingStyle) }, children);
};

export default Heading;
