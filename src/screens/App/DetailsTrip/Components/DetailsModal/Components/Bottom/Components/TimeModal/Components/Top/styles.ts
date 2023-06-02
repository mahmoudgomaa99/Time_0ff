import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    top: {
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    BookText: {
      marginLeft: w * 0.25,
      marginRight: 'auto',
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
  });
