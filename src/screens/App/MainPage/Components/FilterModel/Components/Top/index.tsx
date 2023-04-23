import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import languages from 'values/languages';
import { FormikProps } from 'formik';
import { initialVslues } from '../../data';

const Top = ({
  lang,
  isFilterModalVisable,
  setFilterModalVisable,
  props,
  isDarkMode,
  setfilterData,
}: {
  lang: string;
  props: FormikProps<any>;
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  isDarkMode?: boolean;
  setfilterData: any;
}) => {
  return (
    <View
      style={[
        styles().top,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <TouchableOpacity onPress={() => setFilterModalVisable(false)}>
        <Svg name="close" size={50} />
      </TouchableOpacity>

      <TextView
        title={languages[lang].filter}
        style={styles(isDarkMode).filterText}
      />

      <TextView
        title={languages[lang].reset}
        onPress={() => {
          props.setFieldValue('category', initialVslues.category);
          props.setFieldValue('date', initialVslues.start_date);
          props.setFieldValue('city', initialVslues.location);
          props.setFieldValue('startPrice', initialVslues.price_start);
          props.setFieldValue('endPrice', initialVslues.price_end);
          props.setFieldValue('rating', initialVslues.rating);
          setfilterData({});
        }}
        style={styles(isDarkMode).resetText}
      />
    </View>
  );
};

export default Top;
