import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string) => {
  return StyleSheet.create({
    noReviews: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: MarginsAndPaddings.ml,
      fontWeight: '900',
      fontFamily: Fonts.Cairo_SemiBold,
    },
  });
};
