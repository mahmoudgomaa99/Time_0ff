import { Platform, ScrollView, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
import axios from 'axios';
import ImageSection from './Components/ImageSection';
import useLibraryPermission from 'hooks/useLibraryPermission';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const isLoading = useLoadingSelector(User.thunks.doUpdateUser);
  const isLoadingImage = useLoadingSelector(User.thunks.doUpdateImage);
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const currrentUser = useSelector(selectCurrentUser);
  const [allData, setallData] = useState([]);
  const { source, pick } = useLibraryPermission(1);

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
    const cieties: any = allData.filter(
      (i: any) => i.country === country && country.length > 0,
    );
    const allCieties = cieties[0]?.cities.map((value: any) => ({
      label: value,
      value: value,
    }));
    return allCieties;
  };

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageSection
          source={source}
          pick={pick}
          isDarkMode={isDarkMode}
          lang={lang}
        />
        <Formik
          initialValues={{
            fullName: currrentUser?.name,
            countryCode: '+20',
            phoneNumber: currrentUser?.phone,
            email: currrentUser?.email,
            city: currrentUser?.city,
            country: currrentUser?.country,
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
                data={countries}
                placeholder={'Country'}
                name={'country'}
                values={props.values}
              />
              <Picker
                {...props}
                borderColor={'#F2F2F2'}
                type={'primary'}
                data={
                  props.values.country ? getCities(props.values.country) : []
                }
                placeholder={'City'}
                name={'city'}
                values={props.values}
              />

              <Button
                type="primary"
                label={languages[lang].saveEditing}
                onPress={() => props.handleSubmit()}
                style={styles(lang).button}
                isLoading={isLoading || isLoadingImage}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
