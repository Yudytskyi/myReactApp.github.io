import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './LoadingForm.module.scss';

const LoadingValidationSchema = Yup.object().shape({ url: Yup.string().url().required() });

const LoadingForm = ({ onSubmit }) => {
  return (
    <Formik onSubmit={onSubmit} initialValues={{ url: '' }} validationSchema={LoadingValidationSchema} validateOnBlur>
      {props => {
        return (
          <Form className={styles.form}>
            <Field className={styles.form__input} name="url" type="text" placeholder="Input site url" />
            <ErrorMessage className={styles.form__error} name="url" />
            <button className={styles.form__button} type="submit">
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoadingForm;
