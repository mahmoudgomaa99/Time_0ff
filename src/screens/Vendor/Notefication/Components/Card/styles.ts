import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      // marginBottom: h * 0.025,
      borderRadius: 10,
      paddingTop: 10,
      paddingBottom: 5,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      elevation: isDarkMode ? 4 : 13,
      shadowColor: '#ddd',
      shadowRadius: 10,
    },
    first: {
      flex: 1.4,
    },
    second: {
      flex: 4.6,
      marginHorizontal: 7,
    },
    message: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      textAlign: lang === 'ar' ? 'right' : undefined,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    seats_date: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginTop: 3,
    },
    seats: {
      fontSize: 16,
      color: '#CBCBCB',
      // marginTop: 3,
      // marginLeft: lang === 'en' ? 0 : 'auto',
      fontFamily: Fonts.Cairo_Regular,
      marginHorizontal: 5,
    },
    date: {
      fontSize: 14,
      color: '#CBCBCB',
      marginTop: 2.5,
      // marginRight: lang === 'en' ? 0 : 'auto',
      fontFamily: Fonts.Cairo_Regular,
      marginHorizontal: 5,
    },
    buttons: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1.4,
    },
    firstButton: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#2fff38',
      marginHorizontal: 10,
      borderRadius: 10,
    },
    secondButton: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ff4040',
      marginHorizontal: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 25,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },

    rigth: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,
    },
    lineOneR: {
      width: 20,
      height: 3,
      backgroundColor: 'green',
      transform: [{ rotate: '-45deg' }],
    },
    lineTwoR: {
      width: 12,
      height: 3,
      backgroundColor: 'green',
      transform: [{ rotate: '45deg' }, { translateX: -7 }, { translateY: 8 }],
    },
    close: {
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: '45deg' }],
    },
    lineOneC: {
      width: 20,
      height: 3,
      backgroundColor: 'red',
      transform: [{ rotate: '180deg' }, { translateY: -3 }],
    },
    lineTwoC: {
      width: 20,
      height: 3,
      backgroundColor: 'red',
      transform: [{ rotate: '90deg' }],
    },
  });
};
