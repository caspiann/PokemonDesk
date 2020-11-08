import React from 'react';
import s from './Content.module.scss';
import ContentParallax from './ContentParallax';
import ContentInfo from './ContentInfo';

const Content = () => {
  return (
    <div className={s.root}>
      <ContentInfo />
      <ContentParallax />
    </div>
  );
};

export default Content;
