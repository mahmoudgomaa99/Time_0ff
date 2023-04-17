import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, isDarkMode?: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
    },
    noInbox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -h * 0.15,
    },
    text: {
      marginTop: MarginsAndPaddings.ml,
      fontSize: 22,
      color: COLORS.black,
    },
  });
};
