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
  name,
}: {
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
  name: string;
}) => {
  // function to handle selecting a date
  const [date, setDate] = useState('');
  const handleSelectDate = (date: any) => {
    formikProps.setFieldValue(name, date.dateString);
    setDate(date.dateString);
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
            minDate={new Date().toISOString().split('T')[0]}
            current={formikProps.values[name]}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              [date]: {
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
              dayTextColor: isDarkMode ? COLORS.white : '#000',
              textDisabledColor: '#d6d5d5a7',
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
