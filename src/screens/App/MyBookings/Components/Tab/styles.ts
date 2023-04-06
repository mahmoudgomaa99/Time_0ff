import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-around',
      padding: 10,
      borderColor: '#EEEEEE',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: MarginsAndPaddings.xxl,
    },
    first: {
      flex: 1,
      borderRightColor: lang === 'en' ? '#EEEEEE' : 'white',
      borderLeftColor: lang === 'ar' ? '#EEEEEE' : 'white',
      borderRightWidth: lang === 'en' ? 2 : 0,
      borderLeftWidth: lang === 'ar' ? 2 : 0,
    },
    second: {
      flex: 1,
    },
    activeText: {
      color: '#0370D6',
      fontSize: 16,
      textAlign: 'center',
    },
    text: {
      color: COLORS.black,
      fontSize: 16,
      textAlign: 'center',
    },
  });
};
