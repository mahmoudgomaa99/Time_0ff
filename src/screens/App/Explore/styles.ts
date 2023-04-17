import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
    },
  });
};
