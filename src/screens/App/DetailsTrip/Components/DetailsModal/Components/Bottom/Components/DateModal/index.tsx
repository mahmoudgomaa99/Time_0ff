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

const DateModal = ({
  isDateModalVisable,
  setDateModalVisable,
  formikProps,
  lang,
  isDarkMode,
  availableDates,
}: {
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
  availableDates?: any;

  availabilityJourneys?: any;
}) => {
  const handleSelectDate = (date: any) => {
    formikProps.setFieldValue('date', date.dateString);
    // const Date = moment(date.dateString).format('YYYY/MM/DD');
    // console.log(Date);
    // const times = availabilityJourneys
    //   .map((i: any) => {
    //     if (Date == i.available_date) {
    //       return { label: i.hour, value: i._id };
    //     } else {
    //       return undefined;
    //     }
    //   })
    //   // .filter((i: any) => i !== undefined);
    // setTimes(times);
    // formikProps.setFieldValue('date', date.dateString);
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
              textDisabledColor: '#d6d5d52d',
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
