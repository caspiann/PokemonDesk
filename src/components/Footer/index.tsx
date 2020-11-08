import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.root}>
      <div>
        <span>Make with</span>&nbsp;
        <span className={s.heart}>❤</span>
      </div>
      <div>
        <span>Ours Team</span>
      </div>
    </div>
  );
};

export default Footer;
