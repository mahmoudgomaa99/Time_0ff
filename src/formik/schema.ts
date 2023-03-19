import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginSchema = (
  languages: { [key: string]: any },
  lang: 'en' | 'ar',
) =>
  Yup.object().shape({
    email: Yup.string()
      .email(languages[lang].invalideEmail)
      .required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
  });

export const RegisterSchema = (
  languages: { [key: string]: any },
  lang: 'en' | 'ar',
) =>
  Yup.object().shape({
    phoneNumber: Yup.string()
      .required(languages[lang].required)
      .matches(phoneRegExp, languages[lang].phoneError),
    fullName: Yup.string().required(languages[lang].required),
    email: Yup.string()
      .email(languages[lang].invalideEmail)
      .required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
    city: Yup.string().required(languages[lang].required),
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
