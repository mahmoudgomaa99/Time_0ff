import { View, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import styles from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import { loginSchema } from 'src/formik/schema';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch } from 'redux/store';
import User from 'redux/user';
import { useLoadingSelector } from 'redux/selectors';
import { unwrapResult } from '@reduxjs/toolkit';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { selectIsDarkMode } from 'redux/DarkMode';
import { UserType, selectUserType } from 'redux/UserType';
import { selectDeviceToken, selectToken } from 'redux/tokens/reducer';

const Login = () => {
  const device_token = useSelector(selectDeviceToken);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [secure, setsecure] = useState(true);
  const lang = useSelector(selectLanguage);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doLogIn);
  const token = useSelector(selectToken);
  console.log('token', token);

  return (
    <SafeAreaView style={styles(isDarkMode).container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('chooseType');
        }}
        style={{ position: 'absolute', left: 20, top: 20 }}>
        <Svg name="leftArrow" size={25} />
      </TouchableOpacity>

      <TextView
        title={languages[lang].skip}
        style={[styles(isDarkMode).skip]}
        onPress={() => {
          dispatch(UserType.setUserData('user'));
          navigation.navigate('app', { screen: 'map' });
        }}
      />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Svg name="blueLogo" size={150} />
        <TextView
          title={languages[lang].helloAgain}
          style={styles(isDarkMode).title}
        />
        <TextView
          title={languages[lang].welcomeBack}
          style={styles(isDarkMode).subTitle}
        />
        <View style={styles(isDarkMode).line} />
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values =>
          dispatch(
            User.thunks.doLogIn({
              email: values.email,
              password: values.password,
              device_token: device_token ? device_token : '',
            }),
          )
            .then(unwrapResult) // filter result
            .then(res => {
              dispatch(UserType.setUserData(res.data.userData.type));
              navigation.navigate('app', { screen: 'map' });
              values.email = '';
              values.password = '';
            })
            .catch(err => {
              console.log(err);
            })
        }
        validationSchema={loginSchema(lang)}>
        {props => (
          <View>
            <InputView
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].labelEmail}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={styles(isDarkMode).containerStyle}
              labelStyle={[styles(isDarkMode).label_style]}
            />
            <InputView
              {...props}
              name="password"
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              label={languages[lang].labelPassword}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[
                styles(isDarkMode).containerStyle,
                { marginTop: 10 },
              ]}
              labelStyle={[styles(isDarkMode).label_style]}
              rightIcon={
                Platform.OS === 'ios' ? (
                  <TouchableOpacity onPress={() => setsecure(prev => !prev)}>
                    <Svg
                      name="eyeClosed"
                      style={{ marginTop: -10 }}
                      size={20}
                    />
                  </TouchableOpacity>
                ) : (
                  lang === 'en' && (
                    <TouchableOpacity onPress={() => setsecure(prev => !prev)}>
                      <Svg
                        name="eyeClosed"
                        style={{ marginTop: -10 }}
                        size={20}
                      />
                    </TouchableOpacity>
                  )
                )
              }
              leftIcon={
                Platform.OS === 'android' &&
                lang === 'ar' && (
                  <TouchableOpacity onPress={() => setsecure(prev => !prev)}>
                    <Svg
                      name="eyeClosed"
                      style={{ marginTop: -10 }}
                      size={20}
                    />
                  </TouchableOpacity>
                )
              }
              secureTextEntry={secure}
            />

            <TextView
              title={languages[lang].forgetPassword}
              style={[
                styles(isDarkMode).forget,
                { textAlign: lang === 'en' ? 'right' : 'left' },
              ]}
              onPress={() => {
                if (!props.values.email) {
                  Toast.show({
                    type: 'error',
                    text2: languages[lang].pleaseEnterYourEmail,
                  });
                } else {
                  dispatch(
                    User.thunks.doForgetPassword({ email: props.values.email }),
                  );
                }
              }}
            />
            <Button
              onPress={() => props.handleSubmit()}
              type="primary"
              label={languages[lang].login}
              isLoading={isLoading}
            />
            <TextView title={languages[lang].or} style={styles().or} />
            <View style={styles().containerMedia}>
              <View style={styles(isDarkMode).media}>
                <Svg name="google" size={30} />
              </View>
              {Platform.OS === 'ios' ? (
                <View style={styles(isDarkMode).media}>
                  <Svg name="apple" size={30} />
                </View>
              ) : null}
              <View style={styles(isDarkMode).media}>
                <Svg name="faceBook" size={30} />
              </View>
            </View>

            <View
              style={[
                styles().lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView
                title={languages[lang].notMember}
                style={styles(isDarkMode).notMember}
              />
              <TextView
                title={languages[lang].createAccount}
                style={styles(isDarkMode).create}
                onPress={() => {
                  navigation.navigate('chooseType');
                  props.setErrors({});
                }}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
