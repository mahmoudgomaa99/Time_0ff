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
}: {
  lang: string;
  iconName:string;
  title:string;
  subTitle:string;
}) => {
  return (
    <View style={styles(lang).container}>
      <View>
        <Svg name={iconName} size={50}/>
      </View>
      <View style={styles(lang).second}>
        <TextView title={title} style={styles(lang).title} />
        <TextView title={subTitle} style={styles(lang).subTitle} />
      </View>
    </View>
  );
};

export default Card;
