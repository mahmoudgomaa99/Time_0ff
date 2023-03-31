import { View, Text } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { useNavigation } from '@react-navigation/native';

const Top = ({ lang }: { lang: string }) => {
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
        title={languages[lang].providerProfile}
        style={styles(lang).screenText}
      />
    </View>
  );
};

export default Top;
