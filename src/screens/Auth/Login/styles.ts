import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingHorizontal: MarginsAndPaddings.xxl,
      flex: 1,
    },
    skip: {
      color: isDarkMode ? '#C4C3C3' : '#B5E633',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 24,
      marginTop: Platform.OS === 'android' ? h * 0.006 : 0,
    },
    title: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      textAlign: 'center',
      fontSize: 30,
      lineHeight: 40,
      fontWeight: '500',
    },
    line: {
      width: w * 0.13,
      height: Platform.OS === 'android' ? h * 0.0035 : h * 0.002,
      marginTop: Platform.OS === 'android' ? h * 0.004 : 0,
      borderRadius: 100,
      backgroundColor: isDarkMode ? COLORS.white : COLORS.black,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    subTitle: {
      color: isDarkMode ? '#C4C3C3' : '#444444',
      textAlign: 'center',
      width: w * 0.5,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 18,
      fontWeight: '400',
      // maxWidth: w * 0.3,
    },

    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      // borderWidth: 1,
      // borderColor: isDarkMode ? COLORS.darkMode : COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.08,
      paddingVertical: 5,
    },
    forget: {
      marginTop: Platform.OS === 'android' ? h * 0.035 : h * 0.025,
      color: isDarkMode ? COLORS.alfaBlack : '#9FCE24',
      fontSize: 16,
      marginBottom: h * 0.04,
      fontWeight: '400',
      lineHeight: 21,
    },
    or: {
      textAlign: 'center',
      fontSize: 16,
      color: COLORS.grey,
      lineHeight: 21,
      fontWeight: '500',
      marginTop: 10,
    },
    containerMedia: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: h * 0.02,
    },
    media: {
      borderColor: '#EEEEEE',
      borderWidth: isDarkMode ? 0 : 1,
      marginHorizontal: MarginsAndPaddings.l,
      padding: MarginsAndPaddings.l,
      borderRadius: BorderRadius.s,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: isDarkMode ? COLORS.white : undefined,
      shadowOffset: isDarkMode ? { width: 0, height: 5 } : undefined,
      shadowOpacity: isDarkMode ? 1 : 0,
      backgroundColor: isDarkMode ? '#222533' : undefined,
      elevation: isDarkMode ? 8 : 0,
    },
    lastText: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: h * 0.04,
    },
    create: {
      color: isDarkMode ? COLORS.white : COLORS.darkBlue,
      textDecorationColor: COLORS.blue,
      textDecorationLine: 'underline',
      fontSize: 14,
      // marginHorizontal: 4,
      lineHeight: 19,
      textAlign: 'center',
    },
    label_style: {
      color: '#C4C3C3',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 14,
    },
    notMember: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 19,
      color: isDarkMode ? COLORS.alfaBlack2 : COLORS.secondery,
    },
  });

export default styles;
