import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 40,
      paddingHorizontal: 30,
      paddingVertical: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    input: {
      textAlign: 'center',
    },
    noteContainer: {
      backgroundColor: '#FFEBEB',
      borderRadius: 10,
      padding: 15,
    },
    noteText: {
      fontSize: 14,
      color: '#FF0000',
      textAlign: 'center',
      lineHeight: h * 0.025,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    buttonsContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      marginTop: MarginsAndPaddings.xxl,
    },
    buttons: {
      width: '40%',
    },
  });
};
