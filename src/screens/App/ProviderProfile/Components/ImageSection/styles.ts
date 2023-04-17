import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings, w } from 'values/Dimensions';

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
    },
  });
};
