import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import List from './List.jsx';

const ProtectedRoute = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <Route render={() => 
      isLoggedIn ? (<List />) : (<Redirect to="/login" /> // both components are rendering on the page
    )}/>
  )
}; 

export default ProtectedRoute;