import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      marginVertical: MarginsAndPaddings.ml,
      paddingLeft: lang === 'en' ? 10 : 0,
      paddingRight: lang === 'ar' ? 10 : 0,
    },
    text: {
      fontSize: 18,
      color: COLORS.black,
    },
  });
};
