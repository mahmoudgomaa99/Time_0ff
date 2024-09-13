import { View } from 'react-native';
import React from 'react';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FormikProps } from 'formik';
import { styles } from './styles';
import Top from './Components/Top';
import Button from 'components/molecules/Button';
import COLORS from 'values/colors';
import languages from 'values/languages';
import moment from 'moment';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';

const DateModal = ({
  isDateModalVisable,
  setDateModalVisable,
  formikProps,
  lang,
  isDarkMode,
  availableDates,
  id,
}: {
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
  availableDates?: any;
  availabilityJourneys?: any;
  id?: any;
}) => {
  const dispatch = useAppDispatch();
  const handleSelectDate = (date: any) => {
    formikProps.setFieldValue('date', date.dateString);
    dispatch(
      Journeys.thunks.doGetJourneyAvailabilitey_Vendor_Houres({
        id: id,
        date: date.dateString,
      }),
    )
      .then(unwrapResult)
      .then(res => {
        formikProps.setFieldValue('times', res.data.data);
      })
      .catch(err => {
        console.log(err, 'err');
      });
  };
  return (
    <Modal
      isVisible={isDateModalVisable}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <View style={{ flex: 1, justifyContent: 'center', zIndex: 10 }}>
          <Top
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            lang={lang}
            isDarkMode={isDarkMode}
          />
          <Calendar
            current={formikProps.values.date}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              ...availableDates,
              [formikProps.values.date]: {
                selected: true,
                selectedColor: '#B5E633',
              },
              [moment().format('YYYY-MM-DD')]: {
                disabled: true,
              },
            }}
            disabledByDefault={true}
            disableAllTouchEventsForDisabledDays={true}
            style={{
              backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
              borderRadius: 10,
              marginTop: 20,
              padding: 10,
              elevation: 3,
              shadowColor: 'grey',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
            }}
            theme={{
              calendarBackground: isDarkMode ? COLORS.darkMode : COLORS.white,
              dayTextColor: isDarkMode ? COLORS.white : '#000',
              // todayTextColor:'red',
              textDisabledColor: isDarkMode ? '#ffffff41' : '#d6d5d5a7',
              'stylesheet.calendar.header': {
                headerContainer: {
                  color: isDarkMode ? COLORS.white : COLORS.black,
                },
                monthText: { color: isDarkMode ? COLORS.white : COLORS.black },
                arrowImage: {
                  tintColor: isDarkMode ? COLORS.white : COLORS.black,
                },
              },
            }}
            // headerStyle={{}}
          />
          <Button
            type="primary"
            label={languages[lang].apply}
            style={styles().button}
            onPress={() => {
              // formikProps.handleSubmit();
              setDateModalVisable(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DateModal;
