import { StyleSheet } from 'react-native';
import Fonts from 'values/fonts';
import { BorderRadius, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang?: any, isDarkMode?: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 10,
    },
    label: {
      fontSize: 16,
      color: 'black',
      marginTop: 20,
      fontFamily: Fonts.RobotoMedium,
    },
    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: h * 0.009,
      marginBottom: -10,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    input: {
      textAlign: lang === 'en' ? 'left' : 'right',
    },
    button: {
      marginTop: 30,
      width: w * 0.8,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
