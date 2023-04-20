import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang?: string, isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      flex: 1,
    },
    body: {
      alignItems: 'center',
      justifyContent: 'center',
      height: h * 0.4,
    },
  });
