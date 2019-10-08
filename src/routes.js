import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import login from './pages/Login';
import dashboard from './pages/Dashboard';
import newSpot from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/dashboard' component={dashboard} />
        <Route path='/new' component={newSpot} />
      </Switch>
    </BrowserRouter>
  );
}
