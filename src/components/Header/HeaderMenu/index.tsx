import React from 'react';
import s from './HeaderMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItems';
import { GENERAL_MENU } from '../../../../routes';

const HeaderMenu = () => {
  return (
    <ul className={s.root}>
      {GENERAL_MENU.map(({ title, link }) => (
        <HeaderMenuItem key={title} link={link} title={title} />
      ))}
    </ul>
  );
};

export default HeaderMenu;
