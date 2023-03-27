import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import COLORS from 'values/colors';
import { styles } from './styes';
import { FormikProps } from 'formik';
import TextView from 'atoms/TextView';
import languages from 'values/languages';

const RangePrice = ({
  formikProps,
  lang,
}: {
  formikProps: FormikProps<any>;
  lang: string;
}) => {
  // state to hold the minimum and maximum values
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  // function to format the slider value as a price
  const formatPrice = (value: any) => `$${value.toFixed(2)}`;

  return (
    <View style={styles.range}>
      <TextView title={languages[lang].rangePrice} />
      <Slider
        value={[0, 10000]}
        minimumValue={100}
        maximumValue={1000}
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
      />
    </View>
  );
};

export default RangePrice;
