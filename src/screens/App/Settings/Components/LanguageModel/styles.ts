import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 40,
      paddingHorizontal: 30,
      paddingVertical:20,
      alignItems: 'center',
    },
    container: {

      width: '100%',
    },
    radio: {
      marginLeft: lang === 'ar' ? 'auto' : 0,
    },
    buttonsContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      marginTop: MarginsAndPaddings.xxl,
    },
    buttons: {
      width: '40%',
    },
    text: {
      fontSize: 16,
      color: COLORS.black,
    },
    flexRow:{
      flexDirection:lang === 'en'?'row':'row-reverse',
      alignItems:'center',
      marginLeft:lang==='ar'?'auto':0,
    }
  });
};
