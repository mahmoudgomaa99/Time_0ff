import { View, TouchableOpacity, Platform, Alert } from 'react-native';
import React, { useCallback, useState } from 'react';
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
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { LoginManager, AccessToken, Settings } from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId:
    '223064211464-p59b9b4h5emgj1k1rkurq1umji96canv.apps.googleusercontent.com',
});
Settings.initializeSDK();
// Settings.setAppID('205011505822150');

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
  // Google
  const signInViaGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userinfo = await GoogleSignin.signIn();
      console.log(userinfo, 'lllll');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available or Outdated');
      } else {
        Alert.alert(error.message);
        console.log(error);
      }
    }
  };

  //Facebook
  const initUser = useCallback((token: string) => {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=name,picture,email,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles(isDarkMode).container}>
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
              <TouchableOpacity
                onPress={() => {
                  signInViaGoogle();
                }}
                style={styles(isDarkMode).media}>
                <Svg name="google" size={30} />
              </TouchableOpacity>
              {Platform.OS === 'ios' ? (
                <View style={styles(isDarkMode).media}>
                  <Svg name="apple" size={30} />
                </View>
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  LoginManager.logInWithPermissions([
                    'public_profile',
                    'email',
                  ]).then(res => {
                    console.log(res);
                    if (res.isCancelled) {
                      console.log('Login cancelled');
                    } else {
                      AccessToken.getCurrentAccessToken().then((data: any) => {
                        console.log(data);
                        initUser(data.accessToken);
                      });
                    }
                  });
                }}
                style={styles(isDarkMode).media}>
                <Svg name="faceBook" size={30} />
              </TouchableOpacity>
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
