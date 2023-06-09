import { StyleSheet } from 'react-native';
import { BorderRadius, MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      borderRadius: 40,
      paddingHorizontal: 30,
      paddingVertical: 20,
      alignItems: 'center',
    },
    container: {
      width: '100%',
    },
    text: {
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: 10,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    input: {
      textAlign: lang === 'en' ? 'left' : 'right',
    },
    containerStyle: {
      backgroundColor: isDarkMode ? '#2b2c3a' : COLORS.white,
      // borderWidth: 1,
      borderColor: isDarkMode ? '#2b2c3a' : COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
    },
    label_style: {
      color: '#C4C3C3',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 14,
    },
    buttonsContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      marginTop: MarginsAndPaddings.xxl,
    },
    buttons: {
      width: '40%',
    },
  });
};
