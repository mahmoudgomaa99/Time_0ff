import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingHorizontal: MarginsAndPaddings.l,
      paddingVertical: 10,
    },
    title: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontSize: 24,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    line: {
      width: Platform.OS === 'android' ? w * 0.16 : w * 0.18,
      height: Platform.OS === 'android' ? h * 0.003 : h * 0.002,
      borderRadius: 100,
      backgroundColor: isDarkMode ? COLORS.white : COLORS.black,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
    },
    inputContainerStyling: {
      borderBottomWidth: 0,
      direction: 'rtl',
    },
    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      // borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
    },
    lastText: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    create: {
      color: isDarkMode ? COLORS.white : COLORS.darkBlue,
      textDecorationColor: COLORS.blue,
      textDecorationLine: 'underline',
      marginHorizontal: 4,
      fontSize: 14,
      fontFamily: Fonts.Cairo_Regular,
      fontWeight: '400',
      lineHeight: 19,
    },
    label_style: {
      color: '#C4C3C3',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 14,
    },
  });
