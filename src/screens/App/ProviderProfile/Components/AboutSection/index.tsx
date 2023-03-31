import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';

const AboutSection = ({ lang }: { lang: string }) => {
  return (
    <View>
      <TextView title={languages[lang].lorem} style={styles(lang).text}/>
    </View>
  );
};

export default AboutSection;
