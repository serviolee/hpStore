import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AppWrapper = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <Redirect to="/products" /> // create proper blocking
  }
  return <Redirect to="/login" />
};

export default AppWrapper;