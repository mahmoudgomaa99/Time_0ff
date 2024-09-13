import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

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
      paddingTop: 30,
      // maxHeight: h * 0.9,
    },
  });
