import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import COLORS from 'values/colors';
import { styles } from './styes';
import { FormikProps } from 'formik';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { TInitialValues } from '../../data';
import { useSelector } from 'react-redux';
import { selectCurrency } from 'redux/DarkMode';
import axios from 'axios';

const RangePrice = ({
  formikProps,
  lang,
  isDarkMode,
}: {
  formikProps: FormikProps<TInitialValues>;
  lang: string;
  isDarkMode?: boolean;
}) => {
  const currency = useSelector(selectCurrency);
  const [EGPRate, setEGPRate] = useState(1);
  useEffect(() => {
    if (currency !== 'EGP') {
      axios
        .get(
          `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${currency}`,
          {
            headers: {
              'x-rapidapi-key':
                '7a8a5507famshedd4f1a1d5d9b28p1b3cdbjsn99b3a75a67a9',
            },
          },
        )
        .then(res => {
          setEGPRate(res.data.rates.EGP);
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  }, []);
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
          maximumValue={100000}
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
          title={
            currency !== 'EGP'
              ? `${parseInt(
                  //@ts-ignore
                  Number(formikProps?.values?.price_start) / Number(EGPRate),
                )} ${currency}`
              : formikProps?.values?.price_start?.toString() + ' ' + currency
          }
          style={styles(isDarkMode).priceText}
        />
        <TextView
          title={
            currency !== 'EGP'
              ? `${parseInt(
                  //@ts-ignore
                  Number(formikProps?.values?.price_end) / Number(EGPRate),
                )} ${currency}`
              : formikProps?.values?.price_end?.toString() + ' ' + currency
          }
          style={styles(isDarkMode).priceText}
        />
      </View>
    </View>
  );
};

export default RangePrice;
