import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import styles from './SquadHelpForms.module.scss';
import logo from './logo.png';

const SquadHelpForms = () => {
  return (
    <main className={styles.content} role="main">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <button className={styles.header__button}>
            <a href="/login">Login</a>
          </button>
        </header>
        {<LoginForm />}
      </div>
    </main>
  );
};

export default SquadHelpForms;
