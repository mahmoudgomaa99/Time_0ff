import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';
import languages from 'values/languages';

const Top = ({
  isTimeModalVisable,
  setTimeModalVisable,
  lang,
  isDarkMode,
}: {
  isTimeModalVisable: boolean;
  setTimeModalVisable: any;
  lang: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View style={styles().top}>
      <TouchableOpacity
        onPress={() => {
         
          setTimeModalVisable(false);
        }}>
        <Svg name="close" size={50} />
      </TouchableOpacity>
      <TextView
        title={languages[lang].time}
        style={styles(isDarkMode).BookText}
      />
    </View>
  );
};

export default Top;
