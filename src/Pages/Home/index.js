import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Link className={`${styles.homePage__link} ${styles.calendarPage}`} to="/calendar" title="Calendar" />
      <Link className={`${styles.homePage__link} ${styles.sliderPage}`} to="/slider" title="Slider" />
      <Link
        className={`${styles.homePage__link} ${styles.hyperlinksParserPage}`}
        to="/hyperlinksParser"
        title="HyperlinksParser"
      >
        Hyper links Parser
      </Link>
      <Link className={`${styles.homePage__link} ${styles.userLoader}`} to="/userLoader" title="UserLoader">
        UserLoader
      </Link>
      <Link className={`${styles.homePage__link} ${styles.squadHelpForms}`} to="/squadHelpForms" title="SquadHelpForms">
        SquadHelpForms
      </Link>
    </div>
  );
};
export default Home;
