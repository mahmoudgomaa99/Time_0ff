import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      borderRadius: 24,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
    textContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      width: '100%',
      marginTop: MarginsAndPaddings.xl,
    },
    allow: {
      fontSize: 16,
      color: '#0370D6',
    },
    cancel: {
      fontSize: 16,
      color: '#CECECE',
    },
  });
};
