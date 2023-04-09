import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    parentContainer: {
      marginTop: h * 0.015,
      marginHorizontal: 5,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: COLORS.black,
      marginHorizontal: MarginsAndPaddings.m,
    },
    arrow: {
      transform: [{ rotate: lang === 'en' ? '180deg' : '0deg' }],
    },
  });
};
