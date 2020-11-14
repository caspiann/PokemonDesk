import React from 'react';
import s from '../RootWrapper.module.scss';
import Content from '../../components/Content';
import ContentInfo from '../../components/Content/ContentInfo';
import ContentParallax from '../../components/Content/ContentParallax';

const Main = () => {
  return (
    <div className={s.root}>
      <Content>
        <ContentInfo />
        <ContentParallax />
      </Content>
    </div>
  );
};

export default Main;
