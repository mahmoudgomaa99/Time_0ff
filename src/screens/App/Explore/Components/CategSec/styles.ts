import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    categoryText: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
      textAlign: lang === 'ar' ? 'right' : 'left',
      marginHorizontal: 15,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    trips: {
      marginLeft: -12,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tripText: {
      fontSize: 14,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: 4,
      fontFamily: Fonts.Cairo_Regular,
    },
  });
};
