import React from 'react';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from '../Input';
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
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {formikProps => <Form className={styles.form}>{fields.map(mapField)}</Form>}
    </Formik>
  );
}

CreateForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

CreateForm.defaultProps = {};

export default CreateForm;
