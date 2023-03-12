import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is Required'),
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is Required')
    .min(8, 'Password must be at least 8 characters')
    .matches(includeDigRegExp, 'Password must include at least one number')
    .matches(includeCharRegExp, 'Password must include at least one character'),
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid Phone Number.'),
  email: Yup.string()
    .required('Email Address is Required')
    .matches(EmailReg, 'This is not a valid email.'),
  last_name: Yup.string()
    .required('Last Name is Required')
    .min(2, 'Last Name must be at least 2 charachters'),
  first_name: Yup.string()
    .required('First Name is Required')
    .min(2, 'First Name must be at least 2 charachters'),
  user_name: Yup.string().required('Username is Required'),
  password_confirmation: Yup.string()
    .required('Confirm Password is Required')
    .oneOf([Yup.ref('password')], 'The Passwords do not match.'),
});

export const ForgetSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'This is not a valid phone number.'),
});

export const NewPasswordSchema = Yup.object().shape({
  conf_password: Yup.string()
    .required('Confirm password is Required')
    .oneOf([Yup.ref('password')], 'The passwords do not match.'),
  password: Yup.string()
    .required('password is Required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
});

export const ChangePasswordSchema = Yup.object().shape({
  new_confirm_password: Yup.string()
    .required('Confirm password is Required')
    .oneOf([Yup.ref('new_password')], 'The passwords do not match.'),
  new_password: Yup.string()
    .required('a New Password is Required')
    .min(8, 'password must be at least 8 characters')
    .matches(includeDigRegExp, 'password must include at least one number')
    .matches(includeCharRegExp, 'password must include at least one character'),
  old_password: Yup.string().required('Old password is Required'),
});
