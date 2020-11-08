import React from 'react';
import s from './ContentInfo.module.scss';

const ContentInfo = () => {
  return (
    <div className={s.root}>
      <p className={s.title}>
        <b>Find</b> all your favorite <b>Pokemon</b>
      </p>
      <p className={s.description}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
      <button type="button">See pokemons</button>
    </div>
  );
};

export default ContentInfo;
