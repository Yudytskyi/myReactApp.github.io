import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import styles from './SquadHelpForms.module.scss';
import logo from './logo.png';

const SquadHelpForms = () => {
  const [isLogin, setIsLogin] = useState(true);
  const onLogin = () => {
    console.log('onLogin');
  };
  const onSignap = () => {
    console.log('onSignap');
  };

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
        {isLogin ? <SignUpForm onSubmit={onSignap} /> : <LoginForm onSubmit={onLogin} />}
      </div>
    </main>
  );
};

export default SquadHelpForms;
