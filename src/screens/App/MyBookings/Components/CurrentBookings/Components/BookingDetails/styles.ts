import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import G from 'react-native-svg';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
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
      marginBottom: MarginsAndPaddings.xl,
      marginLeft: -10,
    },
    firstText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.grey : '#979797',
      textAlign: lang === 'ar' ? 'right' : undefined,
      fontFamily: Fonts.Cairo_Regular,
    },
    secondText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      textAlign: lang === 'ar' ? 'right' : undefined,
      fontFamily: Fonts.Cairo_Regular,
    },
  });
};
