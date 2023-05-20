import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = (lang: string) => {
  return StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 24,
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: 'center',
    },
    title: {
      marginTop: 10,
      fontSize: 18,
      color: COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    textContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent: 'space-evenly',
      width: '100%',
      marginTop: MarginsAndPaddings.xl,
    },
    allow: {
      fontSize: 16,
      color: '#0370D6',
      fontFamily: Fonts.Cairo_Regular,
    },
    cancel: {
      fontSize: 16,
      color: '#CECECE',
      fontFamily: Fonts.Cairo_Regular,
    },
  });
};
