import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Page Imports
import HomePage from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import NoPageFound from './Pages/NoPageFound';

const Routes = () => {
  return (
    <Switch>
      <Route path={'/'} exact component={HomePage} />
      <Route path={'/dashboard'} component={Dashboard} />
      <Route component={NoPageFound} />
    </Switch>
  );
};

export default Routes;
