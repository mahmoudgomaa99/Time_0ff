import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      marginBottom: MarginsAndPaddings.ml,
      marginHorizontal: 5,
      marginTop: 15,
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
