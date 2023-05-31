import * as Yup from 'yup';
import languages from 'values/languages';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

export const ChangePasswordSchema = (lang: string) =>
  Yup.object().shape({
    newPassword: Yup.string()
      .required(languages[lang].newPassRequired)
      .min(8, languages[lang].passwordShort),
    confirmNewPassword: Yup.string()
      .required(languages[lang].confirmPassRequired)
      .oneOf([Yup.ref('newPassword')], languages[lang].passwordNotMatch),
  });

export const loginSchema = (lang: string) => {
  return Yup.object().shape({
    email: Yup.string().required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
  });
};

export const registerScheme = (lang: string) => {
  return Yup.object().shape({
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
};
