import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Picker from 'components/molecules/Picker';
import Button from 'components/molecules/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import User, { selectCurrentUser } from 'redux/user';
import { useLoadingSelector } from 'redux/selectors';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import useModalHandler from 'hooks/Modal';
import AuthModal from 'components/organisms/AuthModal';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isLoading = useLoadingSelector(User.thunks.doUpdateUser);
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const currrentUser = useSelector(selectCurrentUser);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <Formik
        initialValues={{
          fullName: currrentUser?.name,
          countryCode: currrentUser?.phone.slice(0, 3),
          phoneNumber: currrentUser?.phone.slice(3),
          email: currrentUser?.email,
          city: currrentUser?.city,
        }}
        onSubmit={values => {
          console.log(values);
          dispatch(
            User.thunks.doUpdateUser({
              name: values?.fullName,
              email: values?.email,
              phone: values?.countryCode + values?.phoneNumber,
              city: values?.city,
            }),
          )
            .then(unwrapResult)
            .then(() => {
              navigation.goBack();
            })
            .catch(err => {});
        }}>
        {props => (
          <View>
            <InputView
              style={styles(lang).input}
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
                styles(lang, isDarkMode).containerStyle,
                { marginTop: 4 },
              ]}
              labelStyle={[styles(lang).label_style]}
            />
            <View style={styles(lang).flexRow}>
              <InputView
                style={styles(lang).input}
                {...props}
                name="countryCode"
                onChangeText={props.handleChange('countryCode')}
                value={props.values.countryCode}
                label={languages[lang].countryCode}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyleCountry,
                  { marginTop: 10 },
                ]}
                labelStyle={[styles(lang).label_style]}
              />
              <InputView
                style={styles(lang).input}
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
                  styles(lang, isDarkMode).containerStylePhone,
                  { marginTop: 10 },
                ]}
                labelStyle={[styles(lang).label_style]}
              />
            </View>

            <InputView
              style={styles(lang).input}
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
                styles(lang, isDarkMode).containerStyle,
                { marginTop: 10 },
              ]}
              labelStyle={[styles(lang).label_style]}
            />

            <Picker
              {...props}
              borderColor={'#F2F2F2'}
              type={'primary'}
              data={[{ label: 'Sharm Elsheikh', value: 'sharm' }]}
              placeholder={'City'}
              name={'city'}
            />

            <Button
              type="primary"
              label={languages[lang].saveEditing}
              onPress={() => props.handleSubmit()}
              style={styles(lang).button}
              isLoading={isLoading}
            />
          </View>
        )}
      </Formik>
    
    </SafeAreaView>
  );
};

export default EditProfile;
