import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginBottom: h * 0.01,
      borderRadius: 10,
      // paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5,
    },
    first: {
      flex: 1.4,
    },
    second: {
      flex: 6,
      marginHorizontal: 7,
    },
    message: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      textAlign: lang === 'ar' ? 'right' : undefined,
    },
    date: {
      fontSize: 14,
      color: '#CBCBCB',
      marginTop: 3,
      marginLeft: lang === 'en' ? 0 : 'auto',
    },
  });
};
