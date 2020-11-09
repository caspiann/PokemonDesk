import React from 'react';
import s from '../RootWrapper.module.scss';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

const Documentation = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>Documentation</Content>
      <Footer />
    </div>
  );
};

export default Documentation;
