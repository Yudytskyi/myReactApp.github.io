import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().trim().email().required(),
  password: Yup.string()
    .matches(
      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^.{8,64}$/,
      'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    )
    .required(),
});

function LoginForm() {
  const handleSubmit = (values, formikBag) => {
    console.dir(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      {formikProps => {
        const { errors, touched } = formikProps;
        return (
          <Form>
            <Field name="email" type="text" placeholder="user email-address" />
            <ErrorMessage name="email" />
            <br />
            <Field
              name="password"
              type="password"
              placeholder="user password"
            />
            <ErrorMessage name="password" />
            <br />
            <button type="submit">Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
