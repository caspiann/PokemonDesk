import React from 'react';
import cn from 'classnames';
import Heading from '../UI/Heading';
import s from './PokemonCard.module.scss';
import Button from '../UI/Button';

const PokemonCard = () => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading headingStyle={s.titleName} level="h5">
          Charmander
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>52</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={s.buttonsWrap}>
          <Button btnStyle={cn(s.labelFire, s.label)}>Fire</Button>

          <Button btnStyle={cn(s.labelPoison, s.label)}>Poison</Button>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
