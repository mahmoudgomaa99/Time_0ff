import { StyleSheet } from 'react-native';
import { BorderRadius, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang?: string, isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingHorizontal: 20,
      paddingVertical: 20,
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
      borderColor: COLORS.lightGrey,
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
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: h * 0.009,
      marginBottom: -10,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    button: {
      marginTop: 30,
      width: w * 0.8,
      marginLeft: 'auto',
      marginRight: 'auto',
      
    },
    img_container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
    },
    img: {
      width: w * 0.4,
      height: w * 0.4,
      borderRadius: w * 0.1,
    },
  });
