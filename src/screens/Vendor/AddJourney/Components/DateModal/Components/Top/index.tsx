import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';
import languages from 'values/languages';

const Top = ({
  isDateModalVisable,
  setDateModalVisable,
  lang,
  isDarkMode,
}: {
  isDateModalVisable: boolean;
  setDateModalVisable: any;
  lang: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View style={styles().top}>
      <TouchableOpacity
        onPress={() => {
       
          setDateModalVisable(false);
        }}>
        <Svg name="close" size={50} />
      </TouchableOpacity>
      <TextView title={languages[lang].calendar} style={styles(isDarkMode).BookText} />
    </View>
  );
};

export default Top;
