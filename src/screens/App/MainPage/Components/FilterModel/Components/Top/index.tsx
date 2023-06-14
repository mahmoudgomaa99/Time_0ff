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
      <TouchableOpacity
        onPress={() => {
          props.setFieldValue('category', '');
          props.setFieldValue('start_date', '');
          props.setFieldValue('location', '');
          props.setFieldValue('price_start', 10000);
          props.setFieldValue('price_end', 50000);
          props.setFieldValue('rating', '');
          setfilterData({});
        }}>
        <TextView
          title={languages[lang].reset}
          style={styles(isDarkMode).resetText}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Top;
