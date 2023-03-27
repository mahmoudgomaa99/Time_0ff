import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';
import languages from 'values/languages';

const Top = ({
  lang,
  isDetailsModalVisibal,
  setisDetailsModalVisibal,
}: {
  lang: string;
  isDetailsModalVisibal: boolean;
  setisDetailsModalVisibal: any;
}) => {
  return (
    <View
      style={[
        styles.top,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <TouchableOpacity
        onPress={() => {
          setisDetailsModalVisibal(false)
        }}>
        <Svg name="close" size={50} />
      </TouchableOpacity>
      <TextView
        title={languages[lang].bookingDetails}
        style={styles.BookText}
      />
    </View>
  );
};

export default Top;
