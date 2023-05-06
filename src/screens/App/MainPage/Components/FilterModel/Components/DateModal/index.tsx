import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FormikProps } from 'formik';
import { styles } from './styles';
import Top from './Components/Top';
import Button from 'components/molecules/Button';
import COLORS from 'values/colors';
import languages from 'values/languages';
const DateModal = ({
  isDateModalVisable,
  setDateModalVisable,
  formikProps,
  lang,
  isDarkMode,
}: {
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
}) => {
  // function to handle selecting a date
  const handleSelectDate = (date: any) => {
    formikProps.setFieldValue('start_date', date.dateString);
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
            current={formikProps.values.start_date}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              [formikProps.values.start_date]: {
                selected: true,
                selectedColor: '#B5E633',
              },
            }}
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
            label={languages[lang].apply}
            style={styles().button}
            onPress={() => {
              setDateModalVisable(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DateModal;
