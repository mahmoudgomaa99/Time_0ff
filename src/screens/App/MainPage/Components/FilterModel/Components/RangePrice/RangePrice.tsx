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
}: {
  formikProps: FormikProps<TInitialValues>;
  lang: string;
}) => {
  return (
    <View>
      <TextView title={languages[lang].rangePrice} style={styles.text} />
      <View
        style={[
          styles.range,
          { direction: lang === 'ar' ? 'rtl' : undefined },
        ]}>
        <Slider
          value={[formikProps.values.startPrice, formikProps.values.endPrice]}
          minimumValue={0}
          maximumValue={10000}
          thumbTintColor={COLORS.blue}
          thumbStyle={{
            shadowOpacity: 0.1,
            shadowOffset: { height: 1, width: 1 },
            shadowColor: COLORS.red,
          }}
          minimumTrackTintColor={COLORS.blue}
          containerStyle={{ backgroundColor: COLORS.white }}
          trackStyle={{ backgroundColor: '#eeeeee' }}
          onValueChange={(val: any) => {
            formikProps.setFieldValue('startPrice', val[0]);
            formikProps.setFieldValue('endPrice', val[1]);
          }}
          step={1}
        />
      </View>
      <View
        style={[
          styles.prices,
          { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
        ]}>
        <TextView
          title={`${formikProps.values.startPrice} ${languages[lang].le}`}
          style={styles.priceText}
        />
        <TextView
          title={`${formikProps.values.endPrice} ${languages[lang].le}`}
          style={styles.priceText}
        />
      </View>
    </View>
  );
};

export default RangePrice;
