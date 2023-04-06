import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      color: COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems:'center',
      marginBottom:MarginsAndPaddings.xl
    },
    firstText: {
      fontSize: 16,
      color: '#979797',
    },
    secondText: {
      fontSize: 16,
      color: COLORS.black,
    },
  });
};
