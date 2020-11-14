import React from 'react';
import Main from './src/pages/Main';
import Pokedex from './src/pages/Pokedex';
import Legendaries from './src/pages/Legendaries';
import Documentation from './src/pages/Documentation';

export const enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Main />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Legendaries />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Documentation />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
