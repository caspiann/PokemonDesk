import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <HeaderLogo />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default React.memo(Header);
