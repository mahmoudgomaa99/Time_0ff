import { StyleSheet } from 'react-native';
import { BorderRadius, MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: MarginsAndPaddings.ml,
    },
    inputContainerStyling: {
      borderBottomWidth: 0,
      direction: 'rtl',
    },
    input: {
      textAlign: lang === 'en' ? 'left' : 'right',
    },
    containerStyle: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
    },
    containerStyleCountry: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
      width: w * 0.25,
    },
    containerStylePhone: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.lightGrey,
      borderRadius: BorderRadius.m,
      height: h * 0.076,
      paddingVertical: 7,
      width: w * 0.75 - 60,
      marginLeft: lang === 'en' ? 10 : 0,
      marginRight: lang === 'ar' ? 10 : 0,
    },
    label_style: {
      color: '#C4C3C3',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 14,
      marginLeft: lang === 'en' ? 0 : 'auto',
      marginBottom:-5
    },
    flexRow: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
    },
    button: {
      marginTop: MarginsAndPaddings.ml,
    },
  });
};
