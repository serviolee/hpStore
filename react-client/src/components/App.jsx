import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import List from './List.jsx';
import AppWrapper from './AppWrapper.jsx';

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={AppWrapper} />
        <Route exact path="/products" component={List} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

