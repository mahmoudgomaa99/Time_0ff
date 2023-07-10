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
import { useNavigation, useRoute } from '@react-navigation/native';
import { unwrapResult } from '@reduxjs/toolkit';
import { GetAvailabilitey } from './utils/GetAvilabilitey';

const UpdateAvailabilitey = () => {
  const routes: any = useRoute();
  const { id, availabilitey } = routes.params;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isDateModalVisable, setDateModalVisable] = useState(false);
  const [isTimeModalVisable, setisTimeModalVisable] = useState(false);
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const isLoading = useLoadingSelector(
    Journeys.thunks.doUpdateJourneyAvailabilitey,
  );
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{
            availability: availabilitey,
          }}
          onSubmit={values => {
            dispatch(
              Journeys.thunks.doUpdateJourneyAvailabilitey({
                id: id,
                availability: {
                  availability: GetAvailabilitey(values.availability),
                },
              }),
            )
              .then(unwrapResult)
              .then(() => {
                navigation.goBack();
              })
              .catch(() => {});
          }}>
          {props => (
            <View>
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

              {props.values.availability.map((item: any, index: number) => (
                <View key={index}>
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
                  {props.values.availability[index].details.map(
                    (item2: any, i: number) => (
                      <View
                        key={i}
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
                                    ? isDarkMode
                                      ? COLORS.white
                                      : '#000'
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
                            placeholder={availabilitey[index]?.details[
                              i
                            ]?.capacity.toString()}
                          />
                        </View>
                      </View>
                    ),
                  )}
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
                label={languages[lang].update}
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

export default UpdateAvailabilitey;
