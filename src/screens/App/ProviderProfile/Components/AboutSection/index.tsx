import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';

const AboutSection = ({
  lang,
  description,
}: {
  lang: string;
  description: any;
}) => {
  return (
    <View>
      <TextView title={description} style={styles(lang).text} />
    </View>
  );
};

export default AboutSection;
