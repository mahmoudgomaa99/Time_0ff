import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginBottom: MarginsAndPaddings.ml,
      textAlign: lang === 'ar' ? 'right' : undefined,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    outerContainer: {
      borderBottomColor: '#EEEEEE',
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: MarginsAndPaddings.ml,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      marginBottom: MarginsAndPaddings.xl,
    },
    firstText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
    secondText: {
      fontSize: 16,
      color: '#979797',
      fontFamily: Fonts.Cairo_Regular,
    },
  });
};
