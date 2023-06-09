import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
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
import { h, w } from '../../../values/Dimensions';
import COLORS from 'values/colors';
import TimeModal from './Components/TimeModal';
import moment from 'moment';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const AddJourney = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [isTimeModalVisable, setisTimeModalVisable] = useState(false);
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const isLoading = useLoadingSelector(Journeys.thunks.doAddJourney);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            journey_name: '',
            category: '',
            capacity: 0,
            price: 0,
            location: '',
            description: '',
            start_date: '',
            availability: [
              {
                date: '',
                details: [
                  {
                    hour: '',
                    capacity: 0,
                  },
                ],
              },
            ],
          }}
          onSubmit={values => {
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
                end_date: values.start_date,
              }),
            )
              .then(unwrapResult)
              .then(() => {
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
                data={[
                  { label: 'Diving', value: 'diving' },
                  { label: 'Trips', value: 'trips' },
                  { label: 'AquaPark', value: 'aquaPark' },
                  { label: 'NileTrip', value: 'nileTrip' },
                  { label: 'BBuggy', value: 'bBuggy' },
                  { label: 'Surfing', value: 'surfing' },
                  { label: 'Willness', value: 'willness' },
                ]}
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
              <InputView
                style={styles(lang).input}
                placeholder="Enter price"
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
                        date: '',
                        details: [
                          {
                            hour: '',
                            capacity: 0,
                          },
                        ],
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
              {props.values.availability.map((item, index) => (
                <View style={{ marginTop: 10 }} key={index}>
                  <TextView
                    style={styles(lang, isDarkMode).text}
                    title={languages[lang].day}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setName(`availability[${index}].date`);
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
                            props.values.availability[index]?.date?.length > 1
                              ? isDarkMode
                                ? COLORS.white
                                : '#000'
                              : '#cdc9c9',
                        },
                      ]}>
                      {props.values.availability[index].date?.length > 1
                        ? props.values.availability[index].date
                        : languages[lang].start_date}
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TextView
                      style={styles(lang, isDarkMode).text}
                      title={languages[lang].hours}
                    />
                    <TextView
                      onPress={() => {
                        props.setFieldValue(`availability[${index}].details`, [
                          ...props.values.availability[index].details,
                          {
                            hour: '',
                            capacity: 0,
                          },
                        ]);
                      }}
                      style={styles(lang, isDarkMode).text}
                      title={languages[lang].add}
                    />
                  </View>
                  {props.values.availability[index].details.map((item, i) => (
                    <View
                      key={i}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                          onPress={() => {
                            setName2(
                              `availability[${index}].details[${i}].hour`,
                            );
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
                                color: props.values.availability[index]
                                  ?.details[i].hour
                                  ? '#000'
                                  : '#cdc9c9',
                              },
                            ]}>
                            {props.values.availability[index].details[i].hour
                              ? moment(
                                  props.values.availability[index].details[i]
                                    .hour,
                                  'HH:mm:ss',
                                ).format('h:mm A')
                              : languages[lang].hour}
                          </Text>
                        </TouchableOpacity>
                        <InputView
                          style={styles(lang).input}
                          {...props}
                          name={`availability[${index}].details[${i}].capacity`}
                          label={languages[lang].capacity}
                          inputContainerStyling={{
                            direction: lang === 'ar' ? 'rtl' : 'ltr',
                            borderBottomWidth: 0,
                            // marginLeft: 10,
                          }}
                          containerStyle={[
                            styles(lang, isDarkMode).containerStyle,
                            { marginTop: 4, marginLeft: 15, width: w * 0.4 },
                          ]}
                          labelStyle={[styles(lang).label_style]}
                          keyboardType="number-pad"
                          placeholder="0"
                        />
                      </View>

                      <TextView
                        onPress={() => {
                          props.setFieldValue(
                            `availability[${index}].details`,
                            props.values.availability[index].details.filter(
                              (item, index2) => index2 !== i,
                            ),
                          );
                        }}
                        style={[
                          styles(lang, isDarkMode).text,
                          { fontSize: 14 },
                        ]}
                        title={languages[lang].remove}
                      />
                    </View>
                  ))}

                  <TextView
                    style={[
                      styles(lang, isDarkMode).text,
                      { textAlign: 'center' },
                    ]}
                    title={languages[lang].remove}
                    onPress={() => {
                      props.setFieldValue(
                        'availability',
                        props.values.availability.filter(
                          (item, index2) => index2 !== index,
                        ),
                      );
                    }}
                  />
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
