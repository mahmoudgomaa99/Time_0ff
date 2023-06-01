import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FormikProps } from 'formik';
import { styles } from './styles';
import Top from './Components/Top';
import Button from 'components/molecules/Button';
import COLORS from 'values/colors';
const DateModal = ({
  selectedDate,
  setSelectedDate,
  isDateModalVisable,
  setDateModalVisable,
  formikProps,
  lang,
  isDarkMode,
  availableDates,
  Times,
  setTimes,
  availabilityJourneys,
}: {
  selectedDate: any;
  setSelectedDate: any;
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
  availableDates?: any;
  Times?: any;
  setTimes?: any;
  availabilityJourneys?: any;
}) => {
  // function to handle selecting a date
  const handleSelectDate = (date: any) => {
    setSelectedDate(date.dateString);
    const [year, month, day] = date.dateString.split('-');
    const Date = `${parseInt(month)}/${parseInt(day)}/${parseInt(year)}`;
    const times = availabilityJourneys
      .map((i: any) => {
        if (Date == i.available_date) {
          return { label: i.hour, value: i._id };
        } else {
          return undefined;
        }
      })
      .filter((i: any) => i !== undefined);
    setTimes(times);
    formikProps.setFieldValue('date', date.dateString);
  };
  console.log(availableDates);
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
            current={selectedDate}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              ...availableDates,
              [selectedDate]: {
                selected: true,
                selectedColor: '#B5E633',
              },
            }}
            disabledByDefault={true}
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
            label="Book Now"
            style={styles().button}
            onPress={() => {
              console.log('clicked');
              formikProps.handleSubmit;
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DateModal;
