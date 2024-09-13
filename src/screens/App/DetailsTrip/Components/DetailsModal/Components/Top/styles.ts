import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    BookText: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
