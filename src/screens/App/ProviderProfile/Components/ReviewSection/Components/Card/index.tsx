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
  isDarkMode,
  image,
  rating,
}: {
  lang: string;
  name: string;
  review: string;
  isDarkMode?: boolean;
  image: string;
  rating: string;
}) => {
  return (
    <View style={styles(lang, isDarkMode).container}>
      <View style={styles(lang).imageContainer}>
        <Image source={{ uri: image }} style={styles(lang).image} />
      </View>
      <View style={styles(lang).contentContainer}>
        <View style={styles(lang).innerContainer}>
          <TextView title={name} style={styles(lang, isDarkMode).name} />
          <View style={styles(lang).starContainer}>
            {[...Array(parseInt(rating)).keys()].map(i => (
              <Svg name="star" size={20} />
            ))}
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
