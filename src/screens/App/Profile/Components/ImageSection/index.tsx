import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';

const ImageSection = ({ lang }: { lang: string }) => {
  return (
    <View style={styles(lang).container} >
      <Image source={images.present} style={styles(lang).image}/>
      <TextView title={languages[lang].mohamed} style={styles(lang).text}/>
    </View>
  );
};

export default ImageSection;
