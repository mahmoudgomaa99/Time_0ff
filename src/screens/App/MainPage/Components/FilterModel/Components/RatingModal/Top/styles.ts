import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    top: {
      marginTop: 0,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    BookText: {
      marginLeft: w * 0.25,
      marginRight: 'auto',
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
