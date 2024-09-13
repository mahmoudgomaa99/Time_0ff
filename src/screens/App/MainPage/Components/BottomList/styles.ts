import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    experiences: {
      marginTop: MarginsAndPaddings.ml,
      marginBottom: MarginsAndPaddings.xxl,
      justifyContent: 'space-between',
      flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
    },
    experiencesText: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    seeMore: {
      fontSize: 18,
      color: isDarkMode ? COLORS.alfaBlack : '#0370D6',
      fontFamily: Fonts.Cairo_SemiBold,
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: MarginsAndPaddings.ml,
      fontWeight: '900',
      color: isDarkMode ? COLORS.white : COLORS.alfaBlack,
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
};
