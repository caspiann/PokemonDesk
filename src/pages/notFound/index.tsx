import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from '../RootWrapper.module.scss';
import Content from '../../components/Content';

const notFound = () => {
  return (
    <div className={s.root}>
      <Header />
      <Content>
        <h1>NotFound</h1>
        <Link to="/">return</Link>
      </Content>
      <Footer />
    </div>
  );
};

export default notFound;
