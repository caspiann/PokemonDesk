import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import notFound from './pages/notFound';
import Documentation from './pages/Documentation';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/home" component={Main} />
        <Route path="/pokedex" component={Pokedex} />
        <Route path="/legendaries" component={Legendaries} />
        <Route path="/documentation" component={Documentation} />
        <Route path="*" render={() => notFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
