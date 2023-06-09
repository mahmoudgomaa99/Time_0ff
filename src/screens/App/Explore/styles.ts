import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
    },
    Text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      margin: MarginsAndPaddings.xl,
      fontFamily:Fonts.Cairo_SemiBold
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: MarginsAndPaddings.ml,
      fontWeight: '900',
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily:Fonts.Cairo_SemiBold
    },
  });
};
