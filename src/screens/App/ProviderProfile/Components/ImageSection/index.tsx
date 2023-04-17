import { View, Text } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import languages from 'values/languages';

const ImageSection = ({
  lang,
  isDarkMode,
}: {
  isDarkMode?: boolean;
  lang: string;
}) => {
  return (
    <View style={styles(lang).container}>
      <View style={styles(lang).imageContainer}>
        <Svg name="blueLogo" size={180} />
        <TextView
          title={'Hastagel Agency'}
          style={styles(lang, isDarkMode).providerName}
        />
      </View>

      <View style={styles(lang).textContainer}>
        <View style={styles(lang, isDarkMode).first}>
          <Svg name="starWithB" />
          <TextView title={'(3.4)'} style={styles(lang, isDarkMode).text} />
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
