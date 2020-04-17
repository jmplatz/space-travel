import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import UserForm from './UserForm';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/userform' component={UserForm} />
  </Switch>
)

export default Main;