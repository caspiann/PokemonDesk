import React from 'react';
import { Link } from 'react-router-dom';
import s from './HeaderMenuItems.module.scss';

const HeaderMenuItem = ({ label, link }: any) => {
  return (
    <li className={s.list}>
      <Link to={`${link}`} className={s.link}>
        {label}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
