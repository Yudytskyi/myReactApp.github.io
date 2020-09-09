import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import styles from './SquadHelpForms.module.scss';
import logo from './logo.png';

const SquadHelpForms = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className={styles.content} role="main">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <button className={styles.header__button} onClick={() => setIsLogin(prev => !prev)}>
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </header>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </div>
    </main>
  );
};

export default SquadHelpForms;
