import React from 'react';
import s from '../RootWrapper.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';

const Main = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>Pocedex</Content>
      <Footer />
    </div>
  );
};

export default Main;
