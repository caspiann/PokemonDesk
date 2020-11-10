import React from 'react';
import { A } from 'hookrouter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from '../RootWrapper.module.scss';
import Content from '../../components/Content';

const NotFound = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <h1>NotFound</h1>
        <A href="/">return</A>
      </Content>
      <Footer />
    </div>
  );
};

export default NotFound;
