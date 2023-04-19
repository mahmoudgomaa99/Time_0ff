import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    noReviews: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: MarginsAndPaddings.ml,
      fontWeight: '900',
    },
  });
};
