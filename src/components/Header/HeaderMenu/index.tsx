import React from 'react';
import s from './HeaderMenu.module.scss';
import HeaderMenuItem from './HeaderMenuItems';

interface menuItem {
  id: number;
  label: string;
  link: string | Location;
}

const HeaderMenu = () => {
  const MENU: Array<menuItem> = [
    {
      id: 1,
      label: 'Home',
      link: '/',
    },
    {
      id: 2,
      label: 'Pokédex',
      link: '/pokedex',
    },
    {
      id: 3,
      label: 'Legendaries',
      link: '/legendaries',
    },
    {
      id: 4,
      label: 'Documentation',
      link: '/documentation',
    },
  ];

  return (
    <ul className={s.root}>
      {MENU.map((item: menuItem) => (
        <HeaderMenuItem key={item.label} link={item.link} label={item.label} />
      ))}
    </ul>
  );
};

export default HeaderMenu;
