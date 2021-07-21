import React from 'react';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
