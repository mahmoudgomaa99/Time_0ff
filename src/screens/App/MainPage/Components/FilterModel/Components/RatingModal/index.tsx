import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FormikProps } from 'formik';
import Button from 'components/molecules/Button';
import COLORS from 'values/colors';
import languages from 'values/languages';
import Top from './Top';
import { h } from 'values/Dimensions';
import Svg from 'atoms/Svg';
import RenderRating from '../RenderRating';
const RatingModal = ({
  isRatingModalVisable,
  setRatingModalVisable,
  formikProps,
  lang,
  isDarkMode,
}: {
  isRatingModalVisable: any;
  setRatingModalVisable: any;
  formikProps: FormikProps<any>;
  lang: string;
  isDarkMode?: boolean;
}) => {
  // function to handle selecting a date
  const handleSelectDate = (date: any) => {
    formikProps.setFieldValue('rating', date.dateString);
  };
  const Data = [
    {
      key: 1,
      value: '1',
    },
    {
      value: '2',
      key: 2,
    },
    {
      value: '3',
      key: 3,
    },
    {
      value: '4',
      key: 4,
    },
    {
      value: '5',
      key: 5,
    },
  ];

  return (
    <Modal
      isVisible={isRatingModalVisable}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <Top
          isDateModalVisable={isRatingModalVisable}
          setDateModalVisable={setRatingModalVisable}
          lang={lang}
          isDarkMode={isDarkMode}
        />
        <View>
          {Data.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                formikProps.setFieldValue('rating', item?.value);
                setRatingModalVisable(false);
              }}
              style={styles(isDarkMode).button}
              key={item?.key}>
              <RenderRating rating={item?.key} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      height: h * 0.55,
      marginTop: 'auto',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 20,
    },
    button: {
      marginVertical: 15,
      borderBottomWidth: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: COLORS.grey,
    },
  });
