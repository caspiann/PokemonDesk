import React from 'react';
import s from './ContentInfo.module.scss';
import Button from '../../UI/Button';
import Heading from '../../UI/Heading';

const ContentInfo = () => {
  return (
    <div className={s.root}>
      <Heading level="h1">
        <b>Find</b> all your favorite <b>Pokemon</b>
      </Heading>
      <Heading level="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
      <Button btnStyle={s.mainPageBtn}>See pokemons</Button>
    </div>
  );
};

export default ContentInfo;
