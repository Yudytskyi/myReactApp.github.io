import React from 'react';
import SignUpForm from './SignUpForm';
import styles from './SquadHelpForms.module.scss';
import logo from './logo.png';

const SquadHelpForms = () => {
  return (
    <main className={styles.content} role="main">
      <div className={styles.free_signup_container}>
        <div className={`${styles.container} ${styles.signup}`}>
          <div className={styles.signup__header}>
            <div className={styles.logo}>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className={styles.loginButton}>
              <a href="/login">Login</a>
            </div>
          </div>
          <div className={styles.signup__container}>
            <div className={styles.signup__info}>
              <h2>CREATE AN ACCOUNT</h2>
              <h4>We always keep your name and email address private.</h4>
            </div>
            <div className={styles.signup__form}>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SquadHelpForms;
