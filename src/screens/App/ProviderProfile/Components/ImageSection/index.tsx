import { View, Text, Image } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { Tagency } from 'redux/journey/model';
import { images } from 'src/assets/images';

const ImageSection = ({
  lang,
  isDarkMode,
  items,
}: {
  isDarkMode?: boolean;
  lang: string;
  items: any;
}) => {
  return (
    <View style={styles(lang).container}>
      <View style={styles(lang).imageContainer}>
        <Image
          source={
            items?.agencyDataRes?.image
              ? { uri: items?.agencyDataRes?.image }
              : images.present
          }
          style={styles(lang).image}
        />
        <TextView
          title={items?.agencyDataRes?.name}
          style={styles(lang, isDarkMode).providerName}
        />
      </View>

      <View style={styles(lang).textContainer}>
        <View style={styles(lang, isDarkMode).first}>
          <Svg name="starWithB" />
          <TextView
            title={`(${items?.agencyDataRes?.rating})`}
            style={styles(lang, isDarkMode).text}
          />
          <TextView
            title={languages[lang].review}
            style={styles(lang, isDarkMode).text}
          />
        </View>
        <View style={styles(lang, isDarkMode).second}>
          <Svg name="locationWithB" />
          <TextView
            title={languages[lang].sharm}
            style={styles(lang, isDarkMode).text}
          />
        </View>
      </View>
    </View>
  );
};

export default ImageSection;
