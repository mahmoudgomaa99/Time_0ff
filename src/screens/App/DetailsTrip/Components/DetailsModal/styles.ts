import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    modalContainer: {
      position: 'relative',
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      height: h * 0.6,
      marginTop: 'auto',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 20,
      paddingTop: 30,
      // maxHeight: h * 0.9,
    },
  });
