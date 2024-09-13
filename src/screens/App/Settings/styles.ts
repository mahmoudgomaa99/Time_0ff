import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string, isDarkMode: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingTop: 15,
    },
    Lcontainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
      marginHorizontal: 10,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginHorizontal: MarginsAndPaddings.m,
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
};
