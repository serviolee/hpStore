import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login.jsx';
import List from './List.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const FourOhFour = () => <h3>404</h3>

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/products" component={List} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

