import React, { PropsWithChildren } from 'react';
import Main from './src/pages/Main';
import Pokedex from './src/pages/Pokedex';
import Pokemon, { PokemonProps } from './src/pages/Pokemon';
import Legendaries from './src/pages/Legendaries';
import Documentation from './src/pages/Documentation';

// eslint-disable-next-line no-shadow
export const enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
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

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
