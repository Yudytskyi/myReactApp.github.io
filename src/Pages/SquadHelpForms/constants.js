import * as Yup from 'yup';

export { default as LoginForm } from './LoginForm';
export { default as SignUpForm } from './SignUpForm';

export const NAME_SCHEMA = Yup.string().min(3).max(64).required();

export const SIGN_UP_VALIDATION_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string().min(6).max(64).required(),
  email: Yup.string().email().required(),
  userPassword: Yup.string()
    .matches(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^.{8,64}$/)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('userPassword')])
    .required(),
});
export const LOGIN_VALIDATION_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string().min(6).max(64).required(),
  email: Yup.string().email().required(),
  userPassword: Yup.string()
    .matches(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)^.{8,64}$/)
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('userPassword')])
    .required(),
});
