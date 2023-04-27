import { View, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import COLORS from 'values/colors';

const Card = ({
  title,
  description,
  location,
  name,
  stars,
  lang,
  isDarkMode,
}: {
  title: string;
  description: string;
  location: string;
  name: string;
  stars: string;
  lang: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View
      style={[
        styles(isDarkMode).container,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <View style={styles(isDarkMode).imageContainer}>
        <Image source={images.present} style={styles(isDarkMode).image} />
      </View>

      <View style={styles(isDarkMode).contentContainer}>
        <View
          style={[
            styles(isDarkMode).top,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <TextView title={title} style={styles(isDarkMode).title} />
        </View>

        <View>
          <TextView
            title={description}
            style={[
              styles(isDarkMode, lang).decription,
              { textAlign: lang === 'ar' ? 'right' : 'left' },
            ]}
          />
        </View>

        <View
          style={[
            styles(isDarkMode).location,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <Svg name="location" size={20} />
          <TextView
            title={location}
            style={styles(isDarkMode, lang).locationText}
          />
        </View>

        <View
          style={[
            styles(isDarkMode).end,
            {
              flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
            },
          ]}>
          <Svg name="jamp" size={20} />
          <TextView
            style={{ color: isDarkMode ? COLORS.white : COLORS.black }}
            title={name}
          />
          <Svg name="star" size={20} />
          <TextView
            style={{ color: isDarkMode ? COLORS.white : COLORS.black }}
            title={`(${stars})`}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
