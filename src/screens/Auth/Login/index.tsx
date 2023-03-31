import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { images } from 'src/assets/images';
import styles from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import InputView from 'components/molecules/Input';
import { Formik } from 'formik';
import Button from 'components/molecules/Button';
import Svg from 'atoms/Svg';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import Picker from 'components/molecules/Picker';
import { loginSchema } from 'src/formik/schema';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const [secure, setsecure] = useState(true);
  const lang = useSelector(selectLanguage);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <TextView
        title={languages[lang].skip}
        style={[styles.skip]}
        onPress={() => navigation.navigate('app', { screen: 'map' })}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Svg name="blueLogo" size={150} />
        <TextView title={languages[lang].helloAgain} style={styles.title} />
        <TextView title={languages[lang].welcomeBack} style={styles.subTitle} />
        <View style={styles.line} />
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
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
              containerStyle={styles.containerStyle}
              labelStyle={[styles.label_style]}
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
              containerStyle={[styles.containerStyle, { marginTop: 10 }]}
              labelStyle={[styles.label_style]}
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
                styles.forget,
                { textAlign: lang === 'en' ? 'right' : 'left' },
              ]}
              onPress={() => console.log('clicked')}
            />
            <Button
              onPress={() => props.handleSubmit()}
              type="primary"
              label={languages[lang].login}
            />
            <TextView title={languages[lang].or} style={styles.or} />
            <View style={styles.containerMedia}>
              <View style={styles.media}>
                <Svg name="google" size={30} />
              </View>
              <View style={styles.media}>
                <Svg name="instegram" size={30} />
              </View>
              <View style={styles.media}>
                <Svg name="faceBook" size={30} />
              </View>
            </View>

            <View
              style={[
                styles.lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView
                title={languages[lang].notMember}
                style={styles.notMember}
              />
              <TextView
                title={languages[lang].createAccount}
                style={styles.create}
                onPress={() => {
                  navigation.navigate('register');
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
