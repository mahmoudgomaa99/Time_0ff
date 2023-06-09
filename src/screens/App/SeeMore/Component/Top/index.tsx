import { View, Text } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import { useNavigation } from '@react-navigation/native';
import languages from 'values/languages';

const Top = ({ lang, isDarkMode }: { lang: string; isDarkMode?: boolean }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles(lang).container}>
      <Svg
        name="arrow"
        size={60}
        style={styles(lang).arrow}
        onPress={() => navigation.goBack()}
      />
      <TextView
        title={languages[lang].activity}
        style={styles(lang, isDarkMode).screenText}
      />
    </View>
  );
};

export default Top;
