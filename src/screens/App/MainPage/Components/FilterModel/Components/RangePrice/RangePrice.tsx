import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import COLORS from 'values/colors';
import { styles } from './styes';
import { FormikProps } from 'formik';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { TInitialValues } from '../../data';

const RangePrice = ({
  formikProps,
  lang,
  isDarkMode,
}: {
  formikProps: FormikProps<TInitialValues>;
  lang: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View>
      <TextView
        title={languages[lang].rangePrice}
        style={styles(isDarkMode).text}
      />
      <View
        style={[
          styles().range,
          { direction: lang === 'ar' ? 'rtl' : undefined },
        ]}>
        <Slider
          value={[formikProps.values.price_start, formikProps.values.price_end]}
          minimumValue={0}
          maximumValue={10000}
          thumbTintColor={isDarkMode ? COLORS.white : COLORS.blue}
          thumbStyle={{
            shadowOpacity: 0.1,
            shadowOffset: { height: 1, width: 1 },
            shadowColor: COLORS.red,
          }}
          minimumTrackTintColor={COLORS.blue}
          containerStyle={{
            backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
          }}
          trackStyle={{
            backgroundColor: isDarkMode ? '#1d1c27' : '#eeeeee',
          }}
          onValueChange={(val: any) => {
            formikProps.setFieldValue('price_start', val[0]);
            formikProps.setFieldValue('price_end', val[1]);
          }}
          step={1}
        />
      </View>
      <View
        style={[
          styles().prices,
          { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
        ]}>
        <TextView
          title={`${formikProps.values.price_start} ${languages[lang].le}`}
          style={styles(isDarkMode).priceText}
        />
        <TextView
          title={`${formikProps.values.price_end} ${languages[lang].le}`}
          style={styles(isDarkMode).priceText}
        />
      </View>
    </View>
  );
};

export default RangePrice;
