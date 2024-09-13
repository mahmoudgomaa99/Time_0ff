import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 24,
      paddingHorizontal: 30,
      paddingVertical:20,
      alignItems: 'center',
    },
    title: {
      marginTop:10,
      fontSize: 16,
      color: COLORS.black,
    },
    textContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      width:'100%',
      marginTop:MarginsAndPaddings.xl
    },
    allow: {
      fontSize: 16,
      color: '#0370D6',
    },
    cancel:{
        fontSize:16,
        color:'#CECECE'
    }
  });
};
