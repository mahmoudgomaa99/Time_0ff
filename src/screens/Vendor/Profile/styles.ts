import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
    },
    inputContainerStyling: {
      borderBottomWidth: 0,
      direction: 'rtl',
    },
    input: {
      textAlign: lang === 'en' ? 'left' : 'right',
    },
    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
      // borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
    },
    containerStyleCountry: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,

      // borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
      width: w * 0.25,
    },
    containerStylePhone: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,

      // borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
      width: w * 0.75 - 60,
      marginLeft: lang === 'en' ? 10 : 0,
      marginRight: lang === 'ar' ? 10 : 0,
    },
    label_style: {
      color: '#C4C3C3',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 14,
      marginLeft: lang === 'en' ? 0 : 'auto',
      marginBottom: -5,
    },
    flexRow: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
    },
    button: {
      marginVertical: 15,
    },
  });
};
