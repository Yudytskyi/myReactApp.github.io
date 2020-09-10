import React, { useState } from 'react';
import LoginForm from './LoginForm';
import styles from './SquadHelpForms.module.scss';
import logo from './logo.png';
import configSquadHelpForms from '../../configs/configSquadHelpForms.json';
import { SIGN_UP_VALIDATION_SCHEMA, LOGIN_VALIDATION_SCHEMA } from './constants';

const SquadHelpForms = () => {
  const { loginFields, loginInitialValues, signApFields, signApInitialValues } = configSquadHelpForms;
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
        {isLogin ? (
          <LoginForm
            onSubmit={onLogin}
            validationSchema={LOGIN_VALIDATION_SCHEMA}
            fields={loginFields}
            initialValues={loginInitialValues}
          />
        ) : (
          <LoginForm
            onSubmit={onSignap}
            validationSchema={SIGN_UP_VALIDATION_SCHEMA}
            fields={signApFields}
            initialValues={signApInitialValues}
          />
        )}
      </div>
    </main>
  );
};

export default SquadHelpForms;
