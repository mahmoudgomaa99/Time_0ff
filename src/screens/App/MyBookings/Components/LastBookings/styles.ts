import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string, color?: string) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      color: COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
    },
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      marginBottom: MarginsAndPaddings.xxl,
    },
    text: {
      fontSize: 16,
      color: COLORS.black,
      maxWidth: w * 0.8,
      marginBottom: MarginsAndPaddings.xs,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
    },
    date: {
      fontSize: 14,
      color: '#979797',
    },
    circleContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginLeft: w * 0.15,
    },
    circle: {
      width: 11,
      height: 11,
      backgroundColor: color,
      borderRadius: 100,
      marginHorizontal: MarginsAndPaddings.s,
    },
    statusText: {
      fontSize: 16,
      color: color,
    },
  });
};
