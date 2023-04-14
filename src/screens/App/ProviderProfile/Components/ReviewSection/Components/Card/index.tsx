import { View, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import { styles } from './styles';

const Card = ({
  lang,
  name,
  review,
}: {
  lang: string;
  name: string;
  review: string;
}) => {
  return (
    <View style={styles(lang).container}>
      <View style={styles(lang).imageContainer}>
        <Image source={images.present} style={styles(lang).image} />
      </View>
      <View style={styles(lang).contentContainer}>
        <View style={styles(lang).innerContainer}>
          <TextView title={name} style={styles(lang).name} />
          <View style={styles(lang).starContainer}>
            <Svg name="star" size={20} />
            <Svg name="star" size={20} />
            <Svg name="star" size={20} />
            <Svg name="star" size={20} />
            <Svg name="star" size={20} />
          </View>
        </View>
        <View style={{ alignSelf: 'flex-end' }}>
          <TextView title={review} style={styles(lang).review} />
        </View>
      </View>
    </View>
  );
};

export default Card;
