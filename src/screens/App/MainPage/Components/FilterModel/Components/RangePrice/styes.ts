import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    range: {
      marginVertical: 20,
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    text: {
      fontSize: 18,
      color: isDarkMode ? COLORS.white : COLORS.black,
      marginTop: h * 0.009,
      marginBottom: 5,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    prices: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10,
    },
    priceText: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
  });
