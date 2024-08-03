import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : '#ffff',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputContainerStyling: {
      borderBottomWidth: 0,
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 5 : 0,
      justifyContent: 'center',
    },
    containerStyle: {
      borderColor: COLORS.black,
      borderRadius: 10,
      height: h * 0.05,
      width: w * 0.14,
      marginHorizontal: 12,
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      borderWidth: isDarkMode ? 0 : 1,
    },
    label: {
      fontSize: 14,
      color: isDarkMode ? COLORS.white : '#000',
      fontFamily: Fonts.RobotoMedium,
      marginTop: 10,
    },
  });
