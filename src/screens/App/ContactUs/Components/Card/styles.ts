import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      marginBottom: h * 0.04,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5,
      elevation: 10,
      shadowColor: '#bfbdbd',
      backgroundColor: 'white',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      height: h * 0.09,
      marginHorizontal: 10,
    },
    second: {
      marginLeft: lang === 'en' ? 3 : 0,
      marginRight: lang === 'ar' ? 3 : 0,
    },
    title: {
      fontSize: 16,
      color: COLORS.black,
    },
    subTitle: {
      fontSize: 14,
      color: COLORS.black,
      maxWidth: w * 0.7,
      marginTop: 3,
      maxHeight: 20,
    },
  });
};
