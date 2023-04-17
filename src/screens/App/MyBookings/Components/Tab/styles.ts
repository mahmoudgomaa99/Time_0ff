import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-around',
      padding: 10,
      borderColor: '#EEEEEE',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: MarginsAndPaddings.xxl,
      marginHorizontal: 15,
    },
    first: {
      flex: 1,
      borderRightColor: lang === 'en' ? '#EEEEEE' : 'white',
      borderLeftColor: lang === 'ar' ? '#EEEEEE' : 'white',
      borderRightWidth: lang === 'en' ? 2 : 0,
      borderLeftWidth: lang === 'ar' ? 2 : 0,
    },
    second: {
      flex: 1,
    },
    activeText: {
      color: isDarkMode ? COLORS.white : '#0370D6',
      fontSize: 16,
      textAlign: 'center',
    },
    text: {
      color: isDarkMode ? COLORS.grey : COLORS.black,
      fontSize: 16,
      textAlign: 'center',
    },
  });
};
