import React from 'react';
import s from '../RootWrapper.module.scss';
import Content from '../../components/Content';
import PokemonCard, { PokemonType } from '../../components/PokemonCard';
import Heading from '../../components/UI/Heading';
import usePokemons from '../../hooks/usePokemon';

export interface IPokemon {
  nameClean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: PokemonType[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={s.root}>
      <Content>
        <div className={s.wrapper}>
          <Heading level="h2">
            {data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          {data.pokemons.map((pokemon: IPokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                types={pokemon.types}
                img={pokemon.img}
              />
            );
          })}
        </div>
      </Content>
    </div>
  );
};

export default Pokedex;
