import { View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import { useLoadingSelector } from 'redux/selectors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectIsDarkMode } from 'redux/DarkMode';
import axios from 'axios';
import { selectUserType } from 'redux/UserType';
import Fonts from 'values/fonts';
import { selectDeviceToken } from 'redux/tokens/reducer';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const device_token = useSelector(selectDeviceToken);
  const userType = useSelector(selectUserType);
  const isLoading = useLoadingSelector(User.thunks.doSignUp);
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [secure, setSecure] = useState(true);
  const [allData, setallData] = useState([]);
  useEffect(() => {
    const getCountries = () =>
      axios.get('https://countriesnow.space/api/v0.1/countries');
    getCountries().then(values => {
      setallData(values.data.data);
    });
    getCountries();
  }, []);

  const countries = allData.map((i: any) => ({
    label: i.country,
    value: i.country,
  }));
  const getCities = (country: string) => {
    const cieties: any = allData.filter(
      (i: any) => i.country === country && country.length > 0,
    );
    const allCieties = cieties[0].cities.map((value: any) => ({
      label: value,
      value: value,
    }));
    return allCieties;
  };

  return (
    <SafeAreaView style={styles(isDarkMode).container}>
      <View style={{ alignItems: 'center' }}>
        <Svg name="blueLogo" size={150} />
        <TextView
          title={languages[lang].register}
          style={styles(isDarkMode).title}
        />
        <View style={styles(isDarkMode).line}></View>
      </View>
      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
          city: '',
          country: '',
        }}
        onSubmit={values => {
          dispatch(
            User.thunks.doSignUp({
              name: values.fullName,
              phone: values.phoneNumber,
              email: values.email,
              password: values.password,
              type: userType,
              city: values.city,
              country: values.country,
              device_token: device_token ? device_token : '',
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
              containerStyle={[
                styles(isDarkMode).containerStyle,
                { marginTop: 4 },
              ]}
              labelStyle={[styles(isDarkMode).label_style]}
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
              containerStyle={[
                styles(isDarkMode).containerStyle,
                { marginTop: 10 },
              ]}
              labelStyle={[styles(isDarkMode).label_style]}
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
              containerStyle={[
                styles(isDarkMode).containerStyle,
                { marginTop: 10 },
              ]}
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
                { marginTop: 10, paddingVertical: 0 },
              ]}
              labelStyle={[styles(isDarkMode).label_style, { paddingTop: 3 }]}
              rightIcon={
                <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
                  <Svg name="eyeClosed" style={{ marginTop: -10 }} size={20} />
                </TouchableOpacity>
              }
              secureTextEntry={secure}
            />
            {/* {userType === 'agency' && (
              <InputView
                {...props}
                name={'description' && 'arabic_description'}
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                label={languages[lang].description}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(isDarkMode).containerStyle,
                  { marginTop: 10 },
                ]}
                labelStyle={[styles(isDarkMode).label_style]}
              />
            )} */}

            <Picker
              {...props}
              borderColor={'#F2F2F2'}
              type={'primary'}
              data={countries}
              placeholder={'Country'}
              name={'country'}
              values={props.values}
            />
            <Picker
              {...props}
              borderColor={'#F2F2F2'}
              type={'primary'}
              data={props.values.country ? getCities(props.values.country) : []}
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
                styles(isDarkMode).lastText,
                { flexDirection: lang === 'en' ? 'row' : 'row-reverse' },
              ]}>
              <TextView
                title={languages[lang].haveAccount}
                style={{
                  color: isDarkMode ? COLORS.alfaBlack2 : COLORS.secondery,
                  fontSize: 14,
                  fontFamily: Fonts.Cairo_Regular,
                  fontWeight: '400',
                  lineHeight: 19,
                }}
              />
              <TextView
                title={languages[lang].login}
                style={styles(isDarkMode).create}
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
