import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: lang === 'en'?'row':'row-reverse',
      alignItems: 'center',
      marginBottom: h*.04,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5,
      elevation: 30,
      shadowColor: '#bfbdbd',
      backgroundColor: 'white',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      height: 74,
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
      maxWidth:w*.75,
      marginTop:3
    },
  });
};
