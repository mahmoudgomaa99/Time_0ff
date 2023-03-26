import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';
export const styles = (lang: string) => {
  return StyleSheet.create({
    experiences: {
      marginTop: MarginsAndPaddings.ml,
      marginBottom: MarginsAndPaddings.xxl,
      justifyContent: 'space-between',
      flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
    },
    experiencesText: {
      fontSize: 18,
      color: COLORS.black,
    },
    seeMore: {
      fontSize: 18,
      color: '#0370D6',
    },
  });
};
