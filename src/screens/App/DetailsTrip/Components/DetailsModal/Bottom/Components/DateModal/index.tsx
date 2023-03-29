import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FormikProps } from 'formik';
import { styles } from './styles';
import Top from './Components/Top';
import Button from 'components/molecules/Button';
const DateModal = ({
  selectedDate,
  setSelectedDate,
  isDateModalVisable,
  setDateModalVisable,
  formikProps,
  lang
}: {
  selectedDate: any;
  setSelectedDate: any;
  isDateModalVisable: any;
  setDateModalVisable: any;
  formikProps: FormikProps<any>;
  lang:string
}) => {
  // function to handle selecting a date
  const handleSelectDate = (date: any) => {
    setSelectedDate(date.dateString);
    console.log(selectedDate);
    formikProps.setFieldValue('date', date.dateString);
  };
  return (
    <Modal
      isVisible={isDateModalVisable}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles.modalContainer}>
        <View style={{ flex: 1, justifyContent: 'center', zIndex: 10 }}>
          <Top
            isDateModalVisable={isDateModalVisable}
            setDateModalVisable={setDateModalVisable}
            lang={lang}
          />
          <Calendar
            current={selectedDate}
            onDayPress={handleSelectDate}
            monthFormat={'MMMM yyyy'}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#B5E633'
              },
            }}
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginTop: 20,
              padding: 10,
              elevation: 3,
              shadowColor: 'grey',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
            }}
          />
          <Button
            type="primary"
            label="Book Now"
            style={styles.button}
            onPress={() => {
              console.log('clicked')
              formikProps.handleSubmit}}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DateModal;
