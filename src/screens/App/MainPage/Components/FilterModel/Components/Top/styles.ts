import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    filterText: {
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
    resetText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
  });
