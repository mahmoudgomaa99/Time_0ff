import { StyleSheet, Platform } from 'react-native';
import { MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 0,
      marginTop: -h * 0.055,
    },
    input: {
      flex: 5.9,
    },
    inputContainerStyling: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : '#FFFF',
      borderColor: COLORS.iconBackDarkMode,
      borderBottomWidth: 0,
      borderRadius: 25,
      height: h * 0.065,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 2.22,
      elevation: 2,
      paddingHorizontal: 10,
    },
    filter: {},
  });
