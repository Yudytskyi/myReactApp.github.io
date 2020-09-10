import React from 'react';
// import PropTypes from 'prop-types';

import CreateForm from '../components/CreateForm';
import styles from './LoginForm.module.scss';
function LoginForm(props) {
  const { onSubmit, validationSchema, fields, initialValues } = props;

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForm__info}>
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
      </div>
      <div className={styles.loginForm__form}>
        <CreateForm
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          fields={fields}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {};

export default LoginForm;
