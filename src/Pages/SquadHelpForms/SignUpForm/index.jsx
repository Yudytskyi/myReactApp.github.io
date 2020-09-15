import React from 'react';
// import PropTypes from 'prop-types';

import { SIGN_UP_VALIDATION_SCHEMA } from '../constants';
import configSquadHelpForms from '../../../configs/configSquadHelpForms.json';
import CreateForm from '../components/CreateForm';
import styles from './SignApForm.module.scss';

function SignApForm({ onSubmit }) {
  const { signApFields, signApInitialValues } = configSquadHelpForms;

  return (
    <div className={styles.signApForm__content}>
      <div className={styles.signApForm__info}>
        <h2>CREATE AN ACCOUNT</h2>
        <h4>We always keep your name and email address private.</h4>
      </div>
      <div className={styles.signApForm__form}>
        <CreateForm
          onSubmit={onSubmit}
          validationSchema={SIGN_UP_VALIDATION_SCHEMA}
          fields={signApFields}
          initialValues={signApInitialValues}
          formName="signApForm"
        />
      </div>
    </div>
  );
}

// SignApForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// SignApForm.defaultProps = {};

export default SignApForm;
