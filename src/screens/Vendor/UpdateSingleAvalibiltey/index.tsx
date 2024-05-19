import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import Top from './Components/Top';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import { Formik } from 'formik';
import TextView from 'atoms/TextView';
import TimeModal from './Components/TimeModal';
import { w } from 'values/Dimensions';
import languages from 'values/languages';
import moment from 'moment';
import InputView from 'components/molecules/Input';
import Button from 'components/molecules/Button';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'redux/store';
import Toast from 'react-native-toast-message';
import { useLoadingSelector } from 'redux/selectors';

const UpdateSingleAvailbilitey = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const { slot } = route.params;
  const [name, setName] = useState('');
  const [isTimeModalVisable, setisTimeModalVisable] = useState(false);
  const isLoading = useLoadingSelector(Journeys.thunks.doUpdteSlot);

  return (
    <SafeAreaView style={styles().container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <Formik
        initialValues={{
          start_hour: slot?.start_hour,
          end_hour: slot?.end_hour,
          availableCapacity: (
            slot?.capacity - slot?.numberOfBookings
          ).toString(),
          available_date: slot?.available_date,
        }}
        onSubmit={values => {
          dispatch(
            Journeys.thunks.doUpdteSlot({
              id: slot?._id,
              data: {
                start_hour: values.start_hour,
                end_hour: values.end_hour,
                capacity:
                  Number(values.availableCapacity) + slot?.numberOfBookings,
              },
            }),
          )
            .then(unwrapResult)
            .then(() => {
              Toast.show({
                type: 'success',
                text2: 'Slot Updated Successfully',
              });
              navigation.goBack();
            })
            .catch(err => {
              console.log(err, 'err');
            });
        }}>
        {props => (
          <View
            style={{
              paddingHorizontal: 15,
            }}>
            <TextView title="Start Hour" style={styles().label} />
            <TouchableOpacity
              onPress={() => {
                setName('start_hour');
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
                    color: props.values.start_hour ? '#000' : '#cdc9c9',
                  },
                ]}>
                {props.values.start_hour
                  ? moment(props.values.start_hour, 'HH:mm:ss').format('h:mm A')
                  : languages[lang].start_hour}
              </Text>
            </TouchableOpacity>
            <TextView title="End Hour" style={styles().label} />
            <TouchableOpacity
              onPress={() => {
                setName('end_hour');
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
                    color: props.values.end_hour ? '#000' : '#cdc9c9',
                  },
                ]}>
                {props.values.end_hour
                  ? moment(props.values.end_hour, 'HH:mm:ss').format('h:mm A')
                  : languages[lang].end_hour}
              </Text>
            </TouchableOpacity>
            <TextView title="Available Capacity" style={styles().label} />
            <InputView
              style={styles(lang).input}
              {...props}
              name={'availableCapacity'}
              inputContainerStyling={{
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                borderBottomWidth: 0,
              }}
              containerStyle={[
                styles(lang, isDarkMode).containerStyle,
                { marginTop: 4 },
              ]}
              placeholder="Enter Available Capacity"
              keyboardType="numeric"
            />
            <Button
              type="primary"
              label={'Apply'}
              style={styles().button}
              onPress={() => {
                props.handleSubmit();
              }}
              isLoading={isLoading}
            />

            <TimeModal
              isTimeModalVisable={isTimeModalVisable}
              setTimeModalVisable={setisTimeModalVisable}
              formikProps={props}
              lang={lang}
              isDarkMode={isDarkMode}
              name={name}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default UpdateSingleAvailbilitey;
