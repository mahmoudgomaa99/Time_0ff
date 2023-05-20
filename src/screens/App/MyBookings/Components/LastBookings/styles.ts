import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, color?: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
      textAlign: lang === 'ar' ? 'right' : undefined,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      marginBottom: MarginsAndPaddings.xxl,
    },
    text: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      maxWidth: w * 0.8,
      marginBottom: MarginsAndPaddings.xs,
      fontFamily: Fonts.Cairo_Regular,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
    },
    date: {
      fontSize: 14,
      color: '#979797',
      fontFamily: Fonts.Cairo_Regular,
    },
    circleContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginLeft: w * 0.15,
    },
    circle: {
      width: 11,
      height: 11,
      backgroundColor: color,
      borderRadius: 100,
      marginHorizontal: MarginsAndPaddings.s,
    },
    statusText: {
      fontSize: 16,
      color: color,
      fontFamily: Fonts.Cairo_Regular,
    },
  });
};
