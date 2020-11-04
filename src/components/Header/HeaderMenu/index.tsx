import React from 'react';
import s from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <ul className={s.menu}>
      <li className={s.menuItem}>
        <a href="/#">Home</a>
      </li>
      <li className={s.menuItem}>
        <a href="/#">Pokédex</a>
      </li>
      <li className={s.menuItem}>
        <a href="/#">Legendaries</a>
      </li>
      <li className={s.menuItem}>
        <a href="/#">Documentation</a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
