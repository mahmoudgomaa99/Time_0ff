import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    parentContainer: {
      marginTop: h * 0.015,
      marginHorizontal: 5,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginHorizontal: MarginsAndPaddings.m,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    arrow: {
      transform: [{ rotate: lang === 'en' ? '180deg' : '0deg' }],
    },

    svg: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : '#eee',
      width: 40,
      height: 40,
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
  });
};
