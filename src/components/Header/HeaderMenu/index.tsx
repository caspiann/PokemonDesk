import React from 'react';
import s from './HeaderMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItems';

interface menuItem {
  id: number;
  label: string;
}

const HeaderMenu = () => {
  const MENU: Array<menuItem> = [
    {
      id: 1,
      label: `Home`,
    },
    {
      id: 2,
      label: `Pokédex`,
    },
    {
      id: 3,
      label: `Legendaries`,
    },
    {
      id: 4,
      label: `Documentation`,
    },
  ];

  return (
    <ul className={s.root}>
      {MENU.map((item) => (
        <HeaderMenuItem key={item.id} label={item.label} />
      ))}
    </ul>
  );
};

export default HeaderMenu;
