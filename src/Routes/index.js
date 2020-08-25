import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Slider from '../Pages/Slider';
import HyperlinksParser from '../Pages/HyperlinksParser';

export const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Calendar} path="/calendar" exact />
      <Route component={Slider} path="/slider" exact />
      <Route component={HyperlinksParser} path="/hyperlinksParser" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
