import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      color: COLORS.black,
      marginBottom: MarginsAndPaddings.ml,
      textAlign: lang === 'ar' ? 'right' : undefined,
    },
    outerContainer: {
      borderBottomColor: '#EEEEEE',
      borderBottomWidth: 1,
      paddingBottom: 10,
      marginBottom: MarginsAndPaddings.ml,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      marginBottom: MarginsAndPaddings.xl,
    },
    firstText: {
      fontSize: 16,
      color: COLORS.black,
    },
    secondText: {
      fontSize: 16,
      color: '#979797',
    },
  });
};
