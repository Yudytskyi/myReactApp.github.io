import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Slider from '../Pages/Slider';
import HyperlinksParser from '../Pages/HyperlinksParser';
import UserLoader from '../Pages/UsersLoader';
import SquadHelpForms from '../Pages/SquadHelpForms';
import styles from './Routes.module.scss';

export const Routes = () => {
  return (
    <>
      <header className={styles.mainHeader}>
        <a href="/">Home Page</a>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route component={Calendar} path="/calendar" />
          <Route component={Slider} path="/slider" />
          <Route component={HyperlinksParser} path="/hyperlinksParser" />
          <Route component={UserLoader} path="/userLoader" />
          <Route component={SquadHelpForms} path="/squadHelpForms" />
          <Route component={Home} path="/" />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </>
  );
};

export default Routes;
