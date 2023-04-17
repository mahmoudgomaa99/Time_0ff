import { StyleSheet, Platform } from 'react-native';
import { MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    input: {
      flex: 5.9,
    },
    inputContainerStyling: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : '#F9F9F9',
      borderColor: COLORS.iconBackDarkMode,
      borderBottomWidth: 0,
      borderRadius: 25,
      height: h * 0.055,
      padding: MarginsAndPaddings.xl,
    },
    filter: {
      marginTop: Platform.OS === 'ios' ? -8 : 0,
      flex: 1,
    },
  });
