import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    categoryText: {
      fontSize: 18,
      color: COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
      textAlign: lang === 'ar' ? 'right' : 'left',
      marginHorizontal: 15,
    },
    trips: {
      marginLeft: -12,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tripText: {
      fontSize: 14,
      color: COLORS.black,
      marginTop: 4,
    },
  });
};
