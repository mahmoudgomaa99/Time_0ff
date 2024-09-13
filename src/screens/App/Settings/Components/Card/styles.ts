import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string) => {
  return StyleSheet.create({
    parentContainer: {
      marginHorizontal: 10,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: MarginsAndPaddings.ml,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: COLORS.black,
      marginHorizontal: MarginsAndPaddings.m,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    arrow: {
      transform: [{ rotate: lang === 'en' ? '180deg' : '0deg' }],
    },
  });
};
