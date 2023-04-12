import { View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import Button from 'components/molecules/Button';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import { useNavigation } from '@react-navigation/native';
import Picker from 'components/molecules/Picker';
import { registerScheme } from 'src/formik/schema';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg from 'atoms/Svg';
import COLORS from 'values/colors';
import { useAppDispatch } from 'redux/store';
import User from 'redux/user';
import { log } from 'react-native-reanimated';
import { useLoadingSelector } from 'redux/selectors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { unwrapResult } from '@reduxjs/toolkit';

const Register = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(User.thunks.doSignUp);
  const lang = useSelector(selectLanguage);

  const [secure, setSecure] = useState(true);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Svg name="blueLogo" size={150} />
        <TextView title={languages[lang].register} style={styles.title} />
        <View style={styles.line}></View>
      </View>
      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
          city: '',
        }}
        onSubmit={values => {
          dispatch(
            User.thunks.doSignUp({
              name: values.fullName,
              phone: values.phoneNumber,
              email: values.email,
              password: values.password,
              type: 'user',
              city: values.city,
            }),
          )
            .then(unwrapResult)
            .then(() => {
              navigation.navigate('app', { screen: 'map' });
            })
            .catch(err => {
              console.log(err);
            });
        }}
        validationSchema={registerScheme(lang)}>
        {props => (
          <KeyboardAwareScrollView
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}>
            <InputView
              {...props}
              name="fullName"
              onChangeText={props.handleChange('fullName')}
              value={props.values.fullName}
              label={languages[lang].fullName}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 4 }]}
              labelStyle={[styles.label_style]}
            />
            <InputView
              {...props}
              name="phoneNumber"
              onChangeText={props.handleChange('phoneNumber')}
              value={props.values.phoneNumber}
              label={languages[lang].phoneNumber}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 10 }]}
              labelStyle={[styles.label_style]}
            />
            <InputView
              {...props}
              name="email"
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              label={languages[lang].email}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[styles.containerStyle, { marginTop: 10 }]}
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
              containerStyle={[
                styles.containerStyle,
                { marginTop: 10, paddingVertical: 0 },
              ]}
              labelStyle={[styles.label_style, { paddingTop: 3 }]}
              rightIcon={
                <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
                  <Svg name="eyeClosed" style={{ marginTop: -10 }} size={20} />
                </TouchableOpacity>
              }
              secureTextEntry={secure}
            />
            <Picker
              {...props}
              borderColor={'#F2F2F2'}
              type={'primary'}
              data={[
                { label: 'egypt', value: 'egypt' },
                { label: 'france', value: 'france' },
              ]}
              placeholder={'City'}
              name={'city'}
              values={props.values}
            />
            <Button
              onPress={props.handleSubmit}
              type="primary"
              label={languages[lang].register}
              style={{ marginTop: 10 }}
              isLoading={isLoading}
            />
            <View
              style={[
                styles.lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView
                title={languages[lang].haveAccount}
                style={{ color: COLORS.secondery }}
              />
              <TextView
                title={languages[lang].login}
                style={styles.create}
                onPress={() => navigation.navigate('login')}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Register;
