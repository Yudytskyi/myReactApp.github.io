import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from '../components/Input';
import styles from './CreateForm.module.scss';

function CreateForm(props) {
  const { onSubmit, validationSchema, fields, initialValues } = props;

  const mapField = (field, index) => (
    <Field key={index} {...field}>
      {fieldProps => (
        <label className={`${styles.form__label} ${styles[field.type]}`}>
          <Input
            className={styles.form__input}
            {...fieldProps}
            {...field}
            onClick={field.name === 'submit' && onSubmit}
          />
          {(field.title || field.subtitle) && (
            <div className={styles.wrapper}>
              <p className={styles.title}>{field.title}</p>
              <span className={styles.subtitle}>{field.subtitle}</span>
            </div>
          )}
          <div className={styles.form__error}>
            <ErrorMessage name={fieldProps.field.name} />
          </div>
        </label>
      )}
    </Field>
  );

  return (
    // <div className={styles.loginForm}>
    //   <div className={styles.loginForm__info}>
    //     <h2>CREATE AN ACCOUNT</h2>
    //     <h4>We always keep your name and email address private.</h4>
    //   </div>
    //   <div className={styles.loginForm__form}>
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {formikProps => <Form className={styles.form}>{fields.map(mapField)}</Form>}
    </Formik>
    //   </div>
    // </div>
  );
}

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

CreateForm.defaultProps = {};

export default CreateForm;
