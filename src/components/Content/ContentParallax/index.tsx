import React, { useEffect, useState } from 'react';

import s from './ContentParallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import PokeBallPng from './assets/Pokeball2.png';
import PikachuPng from './assets/Pikachu.png';
import CloudPng from './assets/Cloud1.png';
import CloudBigPng from './assets/Cloud2.png';

const ContentParallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  const handleMouseMove = (event: MouseEvent) => {
    setScreenX(event.screenX);
    setScreenY(event.screenY);
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div
        style={{
          transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)`,
        }}
        className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.07}px, ${screenY * 0.07}px)`,
        }}
        className={s.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.1}px, ${screenY * 0.1}px)`,
        }}
        className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        style={{
          transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)`,
        }}
        className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)`,
        }}
        className={s.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default ContentParallax;
