import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      // paddingVertical: 20,
    },
    noInbox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      fontFamily: Fonts.Cairo_SemiBold,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
  });
};
