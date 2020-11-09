import React from 'react';
import { useHistory } from 'react-router-dom';
import s from './ContentInfo.module.scss';
import Button from '../../UI/Button';
import Heading from '../../UI/Heading';

const ContentInfo = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/pokedex');
  };

  return (
    <div className={s.root}>
      <Heading level="h1">
        <b>Find</b> all your favorite <b>Pokemon</b>
      </Heading>
      <Heading level="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
      <Button btnStyle={s.mainPageBtn} onClick={handleClick}>
        See pokemons
      </Button>
    </div>
  );
};

export default ContentInfo;
