import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import List from './List.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/products" component={List} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

