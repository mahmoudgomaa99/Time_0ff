import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
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
    radio: {
      marginLeft: lang === 'ar' ? 'auto' : 0,
    },
    buttonsContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      marginTop: MarginsAndPaddings.xxl,
    },
    buttons1: {
      width: '40%',
    },
    buttons2: {
      width: '40%',
    },
    text: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
    flexRow: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginLeft: lang === 'ar' ? 'auto' : 0,
    },
  });
};
