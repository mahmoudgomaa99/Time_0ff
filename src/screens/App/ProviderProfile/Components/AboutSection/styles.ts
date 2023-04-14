import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    text: {
      fontSize: 14,
      color: '#5B5959',
      lineHeight: h * 0.025,
      textAlign: lang === 'ar' ? 'right' : undefined,
    },
  });
};
