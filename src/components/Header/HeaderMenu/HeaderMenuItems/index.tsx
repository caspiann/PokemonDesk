import React from 'react';
import { A } from 'hookrouter';
import s from './HeaderMenuItems.module.scss';

const HeaderMenuItem = ({ link, title }: any) => {
  return (
    <li className={s.list}>
      <A className={s.link} href={link}>
        {title}
      </A>
    </li>
  );
};

export default HeaderMenuItem;
