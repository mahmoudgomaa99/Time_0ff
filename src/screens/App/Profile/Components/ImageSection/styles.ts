import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: h * 0.06,
      marginHorizontal: 15,
    },
    image: {
      width: w * 0.28,
      height: h * 0.14,
      borderRadius: 100,
      resizeMode: 'stretch',
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
    text: {
      fontSize: 24,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginLeft: lang === 'en' ? 10 : 0,
      marginRight: lang === 'ar' ? 10 : 0,
      maxWidth: w * 0.6,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    camera: {
      position: 'absolute',
      bottom: 0,
      right: -20,
    },
  });
};
