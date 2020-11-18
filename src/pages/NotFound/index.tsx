import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Button from '../../components/UI/Button';
import TeamRocket from './assets/Team_Rocket_trio.png';
import { LinkEnum } from '../../../routes';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.photo}>
        <p className={s.number}>404</p>
        <img src={TeamRocket} alt="return" />
      </div>
      <div className={s.info}>
        <p>
          <span className={s.white}>The rocket team</span> has won this time.
        </p>
        <Button
          btnStyle={s.return}
          onClick={() => {
            navigate(LinkEnum.HOME);
          }}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
