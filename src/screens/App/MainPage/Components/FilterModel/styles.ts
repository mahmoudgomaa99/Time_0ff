import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    modalContainer: {
      position: 'relative',
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      height: h * 0.8,
      marginTop: 'auto',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 20,
      paddingTop: 30,
      // maxHeight: h * 0.9,
    },

    inputContainerStyling: {
      borderBottomWidth: 0,
    },
    containerStyle: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      borderColor: COLORS.grey,
      borderRadius: BorderRadius.m,
      height: h * 0.07,
    },

    button: {
      marginTop: 20,
      width: w * 0.8,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: h * 0.009,
      marginBottom: -10,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    pickerContainer: {
      marginHorizontal: 0,
      marginTop: 20,
      borderWidth: 2,
      borderColor: '#EEEEEE',
      borderRadius: 10,
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      height: h * 0.07,
      width: w * 0.9,
      paddingHorizontal: 7,
      justifyContent: 'center',
    },
  });
