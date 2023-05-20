import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import ImageSection from './Components/ImageSection';
import InputView from 'components/molecules/Input';
import { selectCurrentUser } from 'redux/user';
import languages from 'values/languages';
import { Formik } from 'formik';

const Profile = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const currentUser = useSelector(selectCurrentUser);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
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
    </SafeAreaView>
  );
};

export default Profile;
