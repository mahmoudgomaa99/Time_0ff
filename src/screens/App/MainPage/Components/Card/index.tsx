import { View, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import { selectUserType } from 'redux/UserType/index';
import { useSelector } from 'react-redux';

const Card = ({
  title,
  description,
  location,
  name,
  stars,
  lang,
  isDarkMode,
  isFav,
  urlImage,
}: {
  title: string;
  description: string;
  location: string;
  name: string;
  stars: any;
  lang: string;
  isDarkMode?: boolean;
  isFav: boolean;
  urlImage: string;
}) => {
  const userType = useSelector(selectUserType);
  return (
    <View
      style={[
        styles(isDarkMode).container,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <View style={styles().imageContainer}>
        <Image
          source={urlImage ? { uri: urlImage } : images.branding2}
          style={styles().image}
        />
      </View>

      <View style={styles().contentContainer}>
        <View
          style={[
            styles().top,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <TextView title={title} style={styles(isDarkMode).title} />
          {userType === 'user' && (
            <View style={styles(isDarkMode).heart}>
              <Svg name="heart" size={20} bgColor={isFav ? 'red' : 'white'} />
            </View>
          )}
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
          <TextView title={location} style={styles(isDarkMode).locationText} />
        </View>

        <View
          style={[
            styles().end,
            {
              flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
            },
          ]}>
          <Svg name="smile" size={20} />
          <TextView
            style={{
              color: isDarkMode ? COLORS.white : COLORS.black,
              fontFamily: Fonts.Cairo_Regular,
            }}
            title={name}
          />
          <Svg name="star" size={20} />
          <TextView
            style={{
              color: isDarkMode ? COLORS.white : COLORS.black,
              fontFamily: Fonts.Cairo_Regular,
            }}
            title={`(${stars})`}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
