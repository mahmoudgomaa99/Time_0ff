import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h, w } from 'values/Dimensions';
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
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 15,
    },
    tripText: {
      fontSize: 14,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: 4,
      fontFamily: Fonts.Cairo_Regular,
    },
    icon_container: {
      borderWidth: 3,
      borderColor: 'rgba(3, 112, 214, 0.5)',
      borderRadius: 100,
      width: w * 0.15,
      height: h * 0.075,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
