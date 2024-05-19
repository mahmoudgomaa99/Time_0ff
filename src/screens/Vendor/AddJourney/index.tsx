import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectCurrency, selectIsDarkMode } from 'redux/DarkMode';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Picker from 'components/molecules/Picker';
import Svg from 'atoms/Svg';
import DateModal from './Components/DateModal';
import Button from 'components/molecules/Button';
import TextView from 'atoms/TextView';
import { w } from '../../../values/Dimensions';
import COLORS from 'values/colors';
import TimeModal from './Components/TimeModal';
import moment from 'moment';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useNavigation } from '@react-navigation/native';
import User, { selectCategories, selectCurrentUser } from 'redux/user';
import axios from 'axios';
import { AddActivityScheme } from 'src/formik/schema';
import { categData } from 'screens/App/MainPage/Components/FilterModel/data';
import { GetMonthDays } from './utils/GetMonthDays';
import { GetWeekDays } from './utils/GetWeekDays';
import { MultiSelect } from 'react-native-element-dropdown';
import { unwrapResult } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

const AddJourney = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const categories = useSelector(selectCategories);
  const lang = useSelector(selectLanguage);
  const userData = useSelector(selectCurrentUser);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [isTimeModalVisable, setisTimeModalVisable] = useState(false);
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const isLoading = useLoadingSelector(Journeys.thunks.doAddJourney);
  const currency = useSelector(selectCurrency);
  const [EGPRate, setEGPRate] = useState(0);

  useEffect(() => {
    if (currency !== 'EGP') {
      axios
        .get(
          `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${currency}`,
          {
            headers: {
              'x-rapidapi-key':
                '7a8a5507famshedd4f1a1d5d9b28p1b3cdbjsn99b3a75a67a9',
            },
          },
        )
        .then(res => {
          setEGPRate(res.data.rates.EGP);
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  }, []);

  useEffect(() => {
    dispatch(User.thunks.doGetCategories({}));
  }, []);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          validationSchema={AddActivityScheme(lang)}
          initialValues={{
            journey_name: '',
            category: '',
            capacity: null,
            price: null,
            location: '',
            description: '',
            start_date: '',
            end_date: '',
            mode: '',
            frequency: '',
            days_of_month: [],
            days_of_week: [],
            terms: '',
            availability: [
              {
                start_hour: '',
                end_hour: '',
              },
            ],
          }}
          onSubmit={(values: any) => {
            console.log('values', values);
            if (EGPRate !== 0) {
              values.price = values?.price * EGPRate;
            }
            dispatch(
              Journeys.thunks.doAddJourney({
                journey_name: values.journey_name,
                category: values.category,
                description: values.description,
                start_date: values.start_date,
                capacity: values.capacity,
                price: values.price,
                location: values.location,
                arabic_journey_name: values.journey_name,
                arabic_description: values.description,
                arabic_location: values.location,
                arabic_category: values.category,
                availability: values.availability,
                end_date: values?.end_date || values.start_date,
                terms: values.terms,
                mode: values.mode,
                frequency: values.frequency,
                days_of_month: values?.days_of_month,
                days_of_week: values?.days_of_week,
              }),
            )
              .then(unwrapResult)
              .then(() => {
                dispatch(
                  Journeys.thunks.doGetAgencyJourneys({
                    id: userData?._id,
                    page: 1,
                  }),
                );
                navigation.goBack();
              })
              .catch(err => {
                Toast.show({
                  type: 'error',
                  text2: err.message,
                });
              });
          }}>
          {props => (
            <View>
              <InputView
                style={styles(lang).input}
                {...props}
                name={'journey_name'}
                label={languages[lang].journey_name}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                placeholder={'Enter journey name'}
              />
              <Picker
                {...props}
                borderColor={'#6a6969'}
                type={'primary'}
                data={categData(categories, lang)}
                name={'category'}
                stylingProp={{ borderColor: 'red', borderWith: 30 }}
                placeholder={'Select category'}
              />

              <InputView
                style={styles(lang).input}
                {...props}
                name={'description'}
                label={languages[lang].description}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                placeholder="Enter description"
              />
              <InputView
                style={styles(lang).input}
                {...props}
                name={'terms'}
                label={'Terms and Conditions'}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                placeholder="Enter Terms and Conditions"
              />
              <InputView
                style={styles(lang).input}
                {...props}
                name={'location'}
                label={languages[lang].location}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                placeholder="Enter location"
              />
              <InputView
                style={styles(lang).input}
                {...props}
                name={'capacity'}
                label={languages[lang].capacity}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                keyboardType="number-pad"
                placeholder="Enter capacity"
              />
              {/* price is here */}
              <InputView
                style={styles(lang).input}
                placeholder={`Enter price in ${currency}`}
                {...props}
                name={'price'}
                label={languages[lang].price}
                inputContainerStyling={{
                  direction: lang === 'ar' ? 'rtl' : 'ltr',
                  borderBottomWidth: 0,
                }}
                containerStyle={[
                  styles(lang, isDarkMode).containerStyle,
                  { marginTop: 4 },
                ]}
                labelStyle={[styles(lang).label_style]}
                keyboardType="number-pad"
                // addBlurFunc={() => {}}
              />
              <TouchableOpacity
                onPress={() => {
                  setName('start_date');
                  setDateModalVisable(true);
                }}
                style={[
                  styles(lang, isDarkMode).containerStyle,
                  {
                    marginTop: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                  },
                ]}>
                <Svg name="calendar" />
                <Text
                  style={[
                    styles(lang, isDarkMode).text,
                    {
                      fontSize: 14,
                      marginTop: -8,
                      marginLeft: 6,
                      color:
                        props.values.start_date.length > 1
                          ? isDarkMode
                            ? COLORS.white
                            : '#000'
                          : '#cdc9c9',
                    },
                  ]}>
                  {props.values.start_date.length > 1
                    ? props.values.start_date
                    : languages[lang].start_date}
                </Text>
              </TouchableOpacity>

              <Picker
                {...props}
                borderColor={'#6a6969'}
                type={'primary'}
                data={
                  lang === 'en'
                    ? [
                        {
                          label: 'One-time',
                          value: 'oneTime',
                        },
                        {
                          label: 'Repetitive',
                          value: 'repetitive',
                        },
                      ]
                    : [
                        {
                          label: 'مرة واحدة',
                          value: 'oneTime',
                        },
                        {
                          label: 'متكرر',
                          value: 'repetitive',
                        },
                      ]
                }
                name={'mode'}
                stylingProp={{ borderColor: 'red', borderWith: 30 }}
                placeholder={'Select Mode'}
              />

              {props.values?.mode === 'repetitive' ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setName('end_date');
                      setDateModalVisable(true);
                    }}
                    style={[
                      styles(lang, isDarkMode).containerStyle,
                      {
                        marginTop: 20,
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                      },
                    ]}>
                    <Svg name="calendar" />
                    <Text
                      style={[
                        styles(lang, isDarkMode).text,
                        {
                          fontSize: 14,
                          marginTop: -8,
                          marginLeft: 6,
                          color:
                            props.values.end_date.length > 1
                              ? isDarkMode
                                ? COLORS.white
                                : '#000'
                              : '#cdc9c9',
                        },
                      ]}>
                      {props.values.end_date?.length > 1
                        ? props.values.end_date
                        : languages[lang].end_date}
                    </Text>
                  </TouchableOpacity>
                  <Picker
                    {...props}
                    borderColor={'#6a6969'}
                    type={'primary'}
                    data={
                      lang === 'en'
                        ? [
                            {
                              label: 'Daily',
                              value: 'daily',
                            },
                            {
                              label: 'Weekly',
                              value: 'weekly',
                            },
                            {
                              label: 'Monthly',
                              value: 'monthly',
                            },
                          ]
                        : [
                            {
                              label: 'يومي',
                              value: 'daily',
                            },
                            {
                              label: 'أسبوعي',
                              value: 'weekly',
                            },
                            {
                              label: 'شهري',
                              value: 'monthly',
                            },
                          ]
                    }
                    name={'frequency'}
                    stylingProp={{ borderColor: 'red', borderWith: 30 }}
                    placeholder={'Select Frequency'}
                  />
                  {props.values?.frequency === 'monthly' ? (
                    <MultiSelect
                      style={{
                        marginTop: 20,
                        width: w * 0.9,
                        backgroundColor: COLORS.white,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: COLORS.black,
                        justifyContent: 'center',
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        marginBottom: 20,
                      }}
                      data={GetMonthDays()}
                      placeholder="Select days of month"
                      value={props.values.days_of_month}
                      onChange={item => {
                        props.setFieldValue('days_of_month', item);
                      }}
                      labelField={'label'}
                      valueField={'value'}
                    />
                  ) : (
                    <></>
                  )}

                  {props.values?.frequency === 'weekly' ? (
                    <MultiSelect
                      style={{
                        marginTop: 20,
                        width: w * 0.9,
                        backgroundColor: COLORS.white,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: COLORS.black,
                        justifyContent: 'center',
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        marginBottom: 20,
                      }}
                      data={GetWeekDays()}
                      placeholder="Select days of week"
                      value={props.values.days_of_week}
                      onChange={item => {
                        props.setFieldValue('days_of_week', item);
                        console.log('item', item);
                      }}
                      labelField={'label'}
                      valueField={'value'}
                    />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TextView
                  style={styles(lang, isDarkMode).text}
                  title={languages[lang].availabilities}
                />
                <TextView
                  onPress={() => {
                    props.setFieldValue('availability', [
                      ...props.values.availability,
                      {
                        start_hour: '',
                        end_hour: '',
                      },
                    ]);
                  }}
                  style={styles(lang, isDarkMode).text}
                  title={languages[lang].add}
                />
              </View>
              <View
                style={{
                  height: 0.8,
                  width: w * 0.98,
                  backgroundColor: COLORS.black,
                  marginTop: 23,
                }}
              />
              {props.values.availability.map((item: any, index: any) => (
                <View style={{ marginTop: 10 }} key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setName2(`availability[${index}].start_hour`);
                          setisTimeModalVisable(true);
                        }}
                        style={[
                          styles(lang, isDarkMode).containerStyle,
                          {
                            marginTop: 20,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            width: w * 0.26,
                          },
                        ]}>
                        <Text
                          style={[
                            styles(lang, isDarkMode).text,
                            {
                              fontSize: 14,
                              marginTop: -8,
                              marginLeft: 6,
                              color: props.values.availability[index].start_hour
                                ? '#000'
                                : '#cdc9c9',
                            },
                          ]}>
                          {props.values.availability[index].start_hour
                            ? moment(
                                props.values.availability[index].start_hour,
                                'HH:mm:ss',
                              ).format('h:mm A')
                            : languages[lang].start_hour}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setName2(`availability[${index}].end_hour`);
                          setisTimeModalVisable(true);
                        }}
                        style={[
                          styles(lang, isDarkMode).containerStyle,
                          {
                            marginTop: 20,
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            width: w * 0.26,
                          },
                        ]}>
                        <Text
                          style={[
                            styles(lang, isDarkMode).text,
                            {
                              fontSize: 14,
                              marginTop: -8,
                              marginLeft: 6,
                              color: props.values.availability[index].end_hour
                                ? '#000'
                                : '#cdc9c9',
                            },
                          ]}>
                          {props.values.availability[index].end_hour
                            ? moment(
                                props.values.availability[index].end_hour,
                                'HH:mm:ss',
                              ).format('h:mm A')
                            : languages[lang].end_hour}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <TextView
                      onPress={() => {
                        props.setFieldValue('availability', [
                          ...props.values.availability.slice(0, index),
                          ...props.values.availability.slice(index + 1),
                        ]);
                      }}
                      style={[styles(lang, isDarkMode).text, { fontSize: 14 }]}
                      title={languages[lang].remove}
                    />
                  </View>

                  <View
                    style={{
                      height: 0.8,
                      width: w * 0.98,
                      backgroundColor: COLORS.black,
                      marginVertical: 13,
                    }}
                  />
                </View>
              ))}

              <Button
                type="primary"
                label={languages[lang].addJourney}
                style={styles().button}
                onPress={() => {
                  props.handleSubmit();
                }}
                isLoading={isLoading}
              />
              <DateModal
                isDateModalVisable={isDateModalVisable}
                setDateModalVisable={setDateModalVisable}
                formikProps={props}
                lang={lang}
                isDarkMode={isDarkMode}
                name={name}
              />
              <TimeModal
                isTimeModalVisable={isTimeModalVisable}
                setTimeModalVisable={setisTimeModalVisable}
                formikProps={props}
                lang={lang}
                isDarkMode={isDarkMode}
                name={name2}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddJourney;
