import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import languages from 'values/languages';

const Top = ({
  lang,
  isSortModel,
  setisSortModel,
  isDarkMode,
}: {
  lang: string;
  isSortModel: boolean;
  setisSortModel: any;
  isDarkMode?: boolean;
}) => {
  return (
    <View style={styles(lang).container}>
      <Svg
        name="close"
        size={50}
        style={styles(lang).arrow}
        onPress={() => setisSortModel(false)}
      />
      <TextView
        title={languages[lang].sort}
        style={styles(lang, isDarkMode).screenText}
      />
    </View>
  );
};

export default Top;
