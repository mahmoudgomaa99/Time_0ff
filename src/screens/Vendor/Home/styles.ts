import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang?: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
    },
    add: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plus: {
      fontSize: 30,
      color: COLORS.white,
    },
    title: {
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginHorizontal: 20,

      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
};
