import React, { useEffect, useState } from 'react';
import s from '../RootWrapper.module.scss';
import Content from '../../components/Content';
import PokemonCard, { PokemonType } from '../../components/PokemonCard';
import Heading from '../../components/UI/Heading';

interface TotalData {
  total: number;
  count: number;
  offset: number;
  limit: string;
  pokemons: [];
}

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
  const usePokemons = () => {
    const [data, setData] = useState<TotalData>({ count: 0, limit: '', offset: 0, pokemons: [], total: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      const getPokemons = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=30');
          const result = await response.json();
          setData(result);
          setIsError(false);
        } catch (e) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      getPokemons();
    }, []);
    return {
      data,
      isLoading,
      isError,
    };
  };

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
