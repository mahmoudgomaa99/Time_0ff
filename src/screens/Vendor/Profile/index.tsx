import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import Button from 'components/molecules/Button';
import { unwrapResult } from '@reduxjs/toolkit';
import Skeleton from './Components/Skeleton';
import Journeys, { selectCurrentAgency } from 'redux/journey';
import axios from 'axios';
import Picker from 'components/molecules/Picker';
import useLibraryPermission from 'hooks/useLibraryPermission';
import Cities from './mocks/Cities';

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const { source, pick } = useLibraryPermission(1);
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useLoadingSelector(User.thunks.doGetUser);
  const isLoading2 = useLoadingSelector(User.thunks.doUpdateUser);
  const isLoading3 = useLoadingSelector(User.thunks.doUpdateImage);
  const [Update, setUpdate] = useState(true);
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
    label: i?.country,
    value: i?.country,
  }));
  const getCities = (country: string) => {
    if (country === 'Egypt') {
      const allCieties = Cities;
      return allCieties;
    } else {
      const cieties: any = allData.filter(
        (i: any) => i.country === country && country.length > 0,
      );
      const allCieties = cieties[0]?.cities.map((value: any) => ({
        label: value,
        value: value,
      }));
      return allCieties;
    }
  };
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageSection
            pick={pick}
            source={source}
            isDarkMode={isDarkMode}
            lang={lang}
          />
          <View style={{ marginHorizontal: 18 }}>
            <Formik
              initialValues={{
                fullName: currentUser?.name,
                countryCode: '+20',
                phoneNumber: currentUser?.phone,
                email: currentUser?.email,
                city: currentUser?.city,
                description: currentUser?.description,
                country: currentUser?.country,
              }}
              onSubmit={values => {
                const body = new FormData();
                if (source?.assets.length > 0) {
                  body.append('image', {
                    uri:
                      Platform.OS === 'android'
                        ? source?.assets[0]?.uri
                        : source?.assets[0]?.uri.replace('file://', ''),
                    name: source?.assets[0]?.fileName,
                    type: source?.assets[0]?.type,
                  });
                }
                Promise.all([
                  dispatch(
                    User.thunks.doUpdateUser({
                      name: values?.fullName,
                      email: values?.email,
                      phone: values?.phoneNumber,
                      city: values?.city,
                      country: values?.country,
                    }),
                  ),
                  source?.assets.length > 0 &&
                    dispatch(User.thunks.doUpdateImage(body)),
                ])
                  .then(() => {
                    dispatch(User.thunks.doGetUser({}));
                    setUpdate(true);
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
                    disabled={Update}
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
                      disabled={Update}
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
                      disabled={Update}
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
                    disabled={Update}
                  />
                  <Picker
                    {...props}
                    borderColor={'#F2F2F2'}
                    type={'primary'}
                    data={countries}
                    placeholder={currentUser?.country || 'Country'}
                    name={'country'}
                    values={props.values}
                    disabled={Update}
                  />
                  <Picker
                    {...props}
                    borderColor={'#F2F2F2'}
                    type={'primary'}
                    data={
                      props.values.country
                        ? getCities(props?.values?.country)
                        : []
                    }
                    placeholder={currentUser?.city || 'City'}
                    name={'city'}
                    values={props.values}
                    disabled={Update}
                  />
                  <InputView
                    style={styles(lang).input}
                    {...props}
                    name="description"
                    onChangeText={props.handleChange('description')}
                    value={props.values.description}
                    label={languages[lang].description}
                    inputContainerStyling={{
                      direction: lang === 'ar' ? 'rtl' : 'ltr',
                      borderBottomWidth: 0,
                    }}
                    containerStyle={[
                      styles(lang, isDarkMode).containerStyle,
                      { marginTop: 10 },
                    ]}
                    labelStyle={[styles(lang).label_style]}
                    disabled={Update}
                  />
                  {Update ? (
                    <Button
                      type="primary"
                      label={languages[lang].edit}
                      style={styles(lang, isDarkMode).button}
                      onPress={() => {
                        setUpdate(prev => !prev);
                      }}
                    />
                  ) : (
                    <Button
                      type="primary"
                      label={languages[lang].apply}
                      style={styles(lang, isDarkMode).button}
                      onPress={() => {
                        props.handleSubmit();
                      }}
                      isLoading={isLoading2 || isLoading3}
                    />
                  )}
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;
