import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    modalContainer: {
      position: 'relative',
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      height: h * 0.5,
      marginTop: 'auto',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 20,
      paddingTop: h * 0.07,
      maxHeight: h * 0.9,
      paddingBottom: h * 0.06,
    },
    button: {
      marginTop: 60,
    },
  });
