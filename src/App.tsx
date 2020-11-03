import React from 'react';
import s from './App.module.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div className={s.header}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
};

export default App;
