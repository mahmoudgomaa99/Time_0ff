import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (lang: string) => {
  return StyleSheet.create({
    text: {
      fontSize: 14,
      color: '#5B5959',
      lineHeight: h * 0.025,
      textAlign: lang === 'ar' ? 'right' : undefined,
      marginHorizontal: 20,
      fontFamily:Fonts.Cairo_SemiBold
    },
  });
};
