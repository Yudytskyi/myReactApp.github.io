import React from 'react';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import className from 'classnames';

import Input from '../Input';
import styles from './CreateForm.module.scss';

function CreateForm(props) {
  const { onSubmit, validationSchema, fields, initialValues, formName } = props;

  const classNameLabel = name =>
    className(styles[`${formName}__label`], {
      [styles[`signApForm__label_${name}`]]: formName === 'signApForm',
      [styles[`loginForm__label_${name}`]]: formName === 'loginForm',
    });

  const classNamesInput = name =>
    className(styles[`${formName}__input`], {
      [styles[`signApForm__input_${name}`]]: formName === 'signApForm',
      [styles[`loginForm__input_${name}`]]: formName === 'loginForm',
    });

  const mapField = (field, index) => {
    const { name, title, subtitle } = field;
    return (
      <Field key={index} {...field}>
        {fieldProps => (
          <label className={classNameLabel(name)}>
            <Input
              className={classNamesInput(name)}
              {...fieldProps}
              {...field}
              onClick={field.name === 'submit' && onSubmit}
            />
            {(title || subtitle) && (
              <div className={styles.wrapper}>
                {title && <p className={styles.title}>{title}</p>}
                {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
              </div>
            )}
            <div className={styles[`${formName}__error`]}>
              <ErrorMessage name={name} />
            </div>
          </label>
        )}
      </Field>
    );
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {formikProps => <Form className={styles[formName]}>{fields.map(mapField)}</Form>}
    </Formik>
  );
}

// CreateForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// CreateForm.defaultProps = {};

export default CreateForm;
