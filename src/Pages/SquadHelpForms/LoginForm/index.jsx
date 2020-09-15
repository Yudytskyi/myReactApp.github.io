import React from 'react';
// import PropTypes from 'prop-types';

import { LOGIN_VALIDATION_SCHEMA } from '../constants';
import configSquadHelpForms from '../../../configs/configSquadHelpForms.json';
import CreateForm from '../components/CreateForm';
import styles from './LoginForm.module.scss';

function LoginForm({ onSubmit }) {
  const { loginFields, loginInitialValues } = configSquadHelpForms;

  return (
    <div className={styles.loginForm__content}>
      <div className={styles.loginForm__info}>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
      </div>
      <div className={styles.loginForm__form}>
        <CreateForm
          onSubmit={onSubmit}
          validationSchema={LOGIN_VALIDATION_SCHEMA}
          fields={loginFields}
          initialValues={loginInitialValues}
          formName="loginForm"
        />
      </div>
    </div>
  );
}

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// LoginForm.defaultProps = {};

export default LoginForm;
