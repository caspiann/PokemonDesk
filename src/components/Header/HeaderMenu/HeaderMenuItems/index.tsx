import React from 'react';

import s from './HeaderMenuItems.module.scss';

const HeaderMenuItem = ({ label }: any) => {
  return (
    <li className={s.list}>
      <a className={s.link} href="/#">
        {label}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
