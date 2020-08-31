import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Slider from '../Pages/Slider';
import HyperlinksParser from '../Pages/HyperlinksParser';
import UserLoader from '../Pages/UsersLoader';
import SquadHelpForms from '../Pages/SquadHelpForms';

export const Routes = () => {
  return (
    <Switch>
      <Route component={Calendar} path="/calendar" />
      <Route component={Slider} path="/slider" />
      <Route component={HyperlinksParser} path="/hyperlinksParser" />
      <Route component={UserLoader} path="/userLoader" />
      <Route component={SquadHelpForms} path="/squadHelpForms" />
      <Route component={Home} path="/" />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
