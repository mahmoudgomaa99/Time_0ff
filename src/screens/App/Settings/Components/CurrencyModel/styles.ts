import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

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
