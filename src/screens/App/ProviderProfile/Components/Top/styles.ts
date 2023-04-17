import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      //   backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    arrow: {
      transform: [{ rotate: lang === 'en' ? '180deg' : '0deg' }],
      position: 'absolute',
      right: lang === 'ar' ? 0 : '85%',
    },
    screenText: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
};
