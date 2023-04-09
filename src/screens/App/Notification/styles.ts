import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    noInbox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -h * 0.2,
    },
    text: {
      fontSize: 22,
      color: COLORS.black,
    },
  });
};
