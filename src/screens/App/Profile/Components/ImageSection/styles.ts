import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginTop: h * 0.06,
      marginHorizontal: 15,
    },
    image: {
      width: w * 0.29,
      height: h * 0.15,
      borderRadius: 23,
    },
    text: {
      fontSize: 24,
      color: COLORS.black,
      marginLeft: lang === 'en' ? 10 : 0,
      marginRight: lang === 'ar' ? 10 : 0,
    },
  });
};
