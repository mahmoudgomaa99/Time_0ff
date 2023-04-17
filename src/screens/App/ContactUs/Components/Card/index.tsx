import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';

const Card = ({
  lang,
  iconName,
  title,
  subTitle,
  isDarkMode,
}: {
  lang: string;
  iconName: any;
  title: string;
  subTitle: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View style={styles(lang,isDarkMode).container}>
      <View>
        <Svg name={iconName} size={50} />
      </View>
      <View style={styles(lang).second}>
        <TextView title={title} style={styles(lang,isDarkMode).title} />
        <TextView title={subTitle} style={styles(lang,isDarkMode).subTitle} />
      </View>
    </View>
  );
};

export default Card;
