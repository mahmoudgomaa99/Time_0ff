import { StyleSheet } from 'react-native';
import { BorderRadius, MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang?: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    noReviews: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: MarginsAndPaddings.ml,
      fontWeight: '900',
      fontFamily: Fonts.Cairo_SemiBold,
    },
    add_review: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 15,
      display: 'flex',
      justifyContent: 'flex-end',
      marginHorizontal: w * 0.04,
    },
    top_sec: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    user_image: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    user_name: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: Fonts.Cairo_SemiBold,
      marginHorizontal: 12,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      borderRadius: BorderRadius.m,
    },
  });
};
