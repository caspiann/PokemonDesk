import React from 'react';
import s from './Heading.module.scss';

const Header: Array<string> = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`];

type HeadingType = {
  level: string;
};

const Heading: React.FC<HeadingType> = ({ children, level }) => {
  return React.createElement(Header[+level - 1], { className: `${s.heading}` }, children);
};

export default Heading;
