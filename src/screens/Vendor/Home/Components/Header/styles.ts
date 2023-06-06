import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    image: {
      width: w * 0.5,
      height: h * 0.2,
      borderRadius: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      lineHeight: 19,
      textAlign: 'center',
      fontWeight: '400',
      marginVertical: 10,
    },
    Top: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    welcome: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    welcomeBack: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
      justifyContent: 'center',
    },
    welcomeText: {
      fontSize: 14,
      color: isDarkMode ? COLORS.white : COLORS.black,
      lineHeight: 19,
      fontFamily: Fonts.Cairo_Regular,
    },
    nameText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      lineHeight: 24,
      textAlign: 'center',
      fontWeight: '400',
      marginBottom: 10,
      fontFamily: Fonts.Cairo_SemiBold,
      marginTop: 5,
    },
  });
