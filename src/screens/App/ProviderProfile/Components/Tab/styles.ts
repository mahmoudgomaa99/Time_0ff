import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    ContainerText: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'center',
      marginTop: MarginsAndPaddings.ml,
      marginBottom:MarginsAndPaddings.ml
    },
    view: {
      marginHorizontal: w * 0.06,
    },
    blackText: {
      fontSize: 18,
      color: COLORS.black,
    },
    greyText: {
      fontSize: 18,
      color: '#D6D6D6',
    },
    line: {
      width: 20,
      height: 3,
      backgroundColor: '#0370D6',
      borderRadius: 5,
      marginTop: 3,
      marginLeft: lang === 'ar' ? 'auto' : 0,
    },
    lineCenter: {
      width: 20,
      height: 3,
      backgroundColor: '#0370D6',
      borderRadius: 5,
      marginTop: 3,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
};
