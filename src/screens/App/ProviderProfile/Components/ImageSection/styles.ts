import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      marginTop: MarginsAndPaddings.ml,
    },
    imageContainer: {
      alignItems: 'center',
    },
    providerName: {
      fontSize: 22,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    textContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'center',
      marginTop: MarginsAndPaddings.xxl,
    },
    first: {
      marginHorizontal: w * 0.03,
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      borderRadius: 15,
      padding: 7,
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : '#FFF7E8',
    },
    second: {
      marginHorizontal: w * 0.03,
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      borderRadius: 15,
      padding: 7,
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : '#E4FFFC',
    },
    text: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
    image: {
      width: w * 0.4,
      height: h * 0.2,
      borderRadius: 20,
      marginBottom: MarginsAndPaddings.xl,
    },
  });
};
