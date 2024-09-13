import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import { h } from 'src/values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean, lang?: string) =>
  StyleSheet.create({
    container: {
      marginBottom: 11,
      borderRadius: 14,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5,
      elevation: 6,
      shadowColor: isDarkMode ? COLORS.white : '#B4B4B433',
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      shadowOffset: { height: 2.2, width: 0.1 },
      shadowOpacity: 1,
      overflow: 'hidden',
      height: h * 0.215,
      justifyContent: 'space-between',
    },
    contentContainer: {
      flex: 2.2,
      marginHorizontal: 5,
      borderRadius: 15,
    },
    heartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: COLORS.white,
      maxWidth: w * 0.5,
      maxHeight: h * 0.07,
      fontFamily: Fonts.Cairo_SemiBold,
    },

    location: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    locationText: {
      fontSize: 10,
      color: COLORS.white,
      lineHeight: 16,
      fontFamily: Fonts.Cairo_Regular,
    },
    end: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    Arabic: {
      flexDirection: 'row-reverse',
    },
    heart: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      paddingHorizontal: 5,
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#B4B4B433',
      shadowOffset: { height: 2.2, width: 0.1 },
      shadowOpacity: 1,
      borderRadius: 20,
    },
    top: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  });
