import React from 'react';
import s from '../RootWrapper.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from '../../data/data';

const Main = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <div className={s.wrapper}>
          {POKEMONS.map((pokemon) => {
            return (
              <PokemonCard
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
      <Footer />
    </div>
  );
};

export default Main;
