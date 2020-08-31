import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from '../components/Input';
import configSquadHelpForms from '../../../configs/configSquadHelpForms.json';
import styles from './SignUpForm.module.scss';

import { SIGN_UP_VALIDATION_SCHEMA } from '../constants';

const { fields, initialValues } = configSquadHelpForms;

function SignUpForm(props) {
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
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {};

export default SignUpForm;
