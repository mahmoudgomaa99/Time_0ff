import { View, Image, ImageBackground } from 'react-native';
import React, { useCallback } from 'react';
import { images } from 'src/assets/images';
import { styles } from './styles';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import { selectUserType } from 'redux/UserType/index';
import { useSelector } from 'react-redux';
import Journeys, { selectCurrentJourneys } from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const journeys: any = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  useFocusEffect(useCallback(() => setIsLoading(true), []));

  return (
    <ImageBackground
      source={urlImage ? { uri: urlImage } : images.branding2}
      style={[styles(isDarkMode).container]}>
      <View style={styles().top}>
        <View
          style={[
            styles().end,
            {
              flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
            },
          ]}>
          <Svg
            name="star"
            size={15}
            style={{
              marginTop: -2,
            }}
          />
          <TextView
            style={{
              color: COLORS.white,
              fontFamily: Fonts.Cairo_Bold,
              fontSize: 10,
            }}
            title={`(${stars})`}
          />
        </View>
        <View
          style={[
            styles().heartContainer,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          {userType === 'user' && (
            <View style={styles(isDarkMode).heart}>
              <Svg
                name="heart"
                size={20}
                bgColor={isFav ? '#0370D6' : 'white'}
              />
            </View>
          )}
        </View>
      </View>
      <View>
        <TextView title={title} style={styles(isDarkMode).title} />
        <View
          style={[
            styles(isDarkMode).location,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <Svg name="location" size={20} />
          <TextView title={location} style={styles(isDarkMode).locationText} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;
function selectJourneys(state: unknown): unknown {
  throw new Error('Function not implemented.');
}
