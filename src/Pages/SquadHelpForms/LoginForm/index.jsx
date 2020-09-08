import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from '../components/Input';
import configSquadHelpForms from '../../../configs/configSquadHelpForms.json';
import styles from './LoginForm.module.scss';

import { SIGN_UP_VALIDATION_SCHEMA } from '../constants';

const { fields, initialValues } = configSquadHelpForms;

function LoginForm(props) {
  const { onSubmit } = props;

  const mapField = (field, index) => (
    <Field key={index} {...field}>
      {fieldProps => (
        <label className={styles.form__label}>
          <Input className={styles.form__input} {...fieldProps} {...field} />
          <ErrorMessage className={styles.form__error} name={fieldProps.field.name} />
        </label>
      )}
    </Field>
  );

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForm__info}>
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
      </div>
      <div className={styles.loginForm__form}>
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={SIGN_UP_VALIDATION_SCHEMA}>
          {formikProps => (
            <Form className={styles.form}>
              {fields.map(mapField)}

              <button className={styles.form__button} type="submit">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {};

export default LoginForm;
