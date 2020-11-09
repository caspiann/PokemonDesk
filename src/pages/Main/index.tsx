import React from 'react';
import s from '../RootWrapper.module.scss';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import ContentInfo from '../../components/Content/ContentInfo';
import ContentParallax from '../../components/Content/ContentParallax';

const Main = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <ContentInfo />
        <ContentParallax />
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
