import React from 'react';
import s from '../RootWrapper.module.scss';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const Legendaries = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>Legendaries</Content>
      <Footer />
    </div>
  );
};

export default Legendaries;
