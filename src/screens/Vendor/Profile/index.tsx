import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import ImageSection from './Components/ImageSection';
import InputView from 'components/molecules/Input';
import User, { selectCurrentUser } from 'redux/user';
import languages from 'values/languages';
import { Formik } from 'formik';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

const Profile = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useLoadingSelector(User.thunks.doGetUser);
  useFocusEffect(
    useCallback(() => {
      dispatch(User.thunks.doGetUser({}));
    }, []),
  );
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: h * 0.15 }}
          color={COLORS.primary}
          size="large"
        />
      ) : (
        <>
          <ImageSection isDarkMode={isDarkMode} lang={lang} />
          <View style={{ marginHorizontal: 18 }}>
            <Formik
              initialValues={{
                fullName: currentUser?.name,
                countryCode: '+20',
                phoneNumber: currentUser?.phone.slice(1),
                email: currentUser?.email,
                city: currentUser?.city,
                desc: currentUser?.country,
              }}
              onSubmit={values => {
                console.log(values);
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
                    disabled={true}
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
                      disabled
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
                      disabled
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
                    disabled
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name="city"
                    onChangeText={props.handleChange('city')}
                    value={props.values.email}
                    label={languages[lang].city}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 10 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    disabled
                  />
                  {/* <InputView
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
                disabled
              /> */}
                </View>
              )}
            </Formik>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;
