import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Modal from 'react-native-modal';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import { ChangePasswordSchema } from 'src/formik/schema';
import User from 'redux/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLoadingSelector } from 'redux/selectors';
const PasswordModel = ({
  lang,
  isPasswordModel,
  setisPasswordModel,
}: {
  lang: string;
  isPasswordModel: boolean;
  setisPasswordModel: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doResetPassword);
  return (
    <Modal isVisible={isPasswordModel}>
      <View style={styles(lang, isDarkMode).modalContainer}>
        <Svg name="key" size={70} />
        <TextView
          title={languages[lang].changeYourPassword}
          style={styles(lang, isDarkMode).text}
        />
        <Formik
          validationSchema={ChangePasswordSchema(lang)}
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            isSecure1: true,
            isSecure2: true,
          }}
          onSubmit={values => {
            dispatch(
              User.thunks.doResetPassword({ password: values.newPassword }),
            )
              .then(unwrapResult)
              .then(() => {
                setisPasswordModel(false);
              })
              .catch(() => {});
            console.log(values);
          }}>
          {props => (
            <View style={styles(lang).container}>
              {/* <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="oldPassword"
                onChangeText={props.handleChange('oldPassword')}
                value={props.values.oldPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].oldPassword}
              /> */}
              <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="newPassword"
                onChangeText={props.handleChange('newPassword')}
                value={props.values.newPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].newPassword}
                secureTextEntry={props.values.isSecure1}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => {
                      props.setFieldValue('isSecure1', !props.values.isSecure1);
                    }}>
                    <Svg name="eyeClosed" size={20} />
                  </TouchableOpacity>
                }
              />
              <InputView
                style={styles(lang, isDarkMode).input}
                {...props}
                name="confirmNewPassword"
                onChangeText={props.handleChange('confirmNewPassword')}
                value={props.values.confirmNewPassword}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                placeholder={languages[lang].confirmNewPassword}
                secureTextEntry={props.values.isSecure2}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => {
                      props.setFieldValue('isSecure2', !props.values.isSecure2);
                    }}>
                    <Svg name="eyeClosed" size={20} />
                  </TouchableOpacity>
                }
              />

              <View style={styles(lang).buttonsContainer}>
                <Button
                  type={'primaryModel'}
                  label={languages[lang].confirm}
                  onPress={() => {
                    props.handleSubmit();
                  }}
                  style={styles(lang).buttons}
                  isLoading={isLoading}
                />
                <Button
                  type={'cancel'}
                  label={languages[lang].cancel}
                  onPress={() => {
                    setisPasswordModel(false);
                  }}
                  style={styles(lang).buttons}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default PasswordModel;
