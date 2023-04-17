import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingTop: 15,
    },
  });
};
