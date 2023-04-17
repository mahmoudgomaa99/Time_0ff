import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

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
    },
    resetText: {
      fontSize: 16,
    },
  });
