import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input(props) {
  const {
    field,
    meta: { touched, error },
    ...rest
  } = props;

  const inputClassName = classNames(styles.inputDefault, {
    [styles.inputError]: touched && error,
    [styles.inputValid]: touched && !error,
  });

  return <input className={inputClassName} {...rest} {...field} />;
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'url', 'email', 'password', 'textarea']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
