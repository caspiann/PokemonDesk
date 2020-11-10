import React from 'react';
import Heading from '../UI/Heading';
import s from './PokemonCard.module.scss';
import Button from '../UI/Button';

export type PokemonType =
  | 'dark'
  | 'rock'
  | 'grass'
  | 'bug'
  | 'ice'
  | 'water'
  | 'fire'
  | 'fighting'
  | 'dragon'
  | 'normal'
  | 'gosth'
  | 'poison'
  | 'psychic'
  | 'fairy'
  | 'ghost'
  | 'ground'
  | 'electric'
  | 'flying';

interface IPokemonProps {
  name: string;
  attack: number;
  defense: number;
  types: PokemonType[];
  img: string;
}

const PokemonCard: React.FC<IPokemonProps> = ({ name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading headingStyle={s.titleName} level="h5">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.buttonsWrap}>
          {types.map((type) => (
            <Button btnStyle={s.label}>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</Button>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
