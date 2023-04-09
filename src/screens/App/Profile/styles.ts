import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
  });
};
