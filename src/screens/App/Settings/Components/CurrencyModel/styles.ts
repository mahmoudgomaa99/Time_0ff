import { StyleSheet } from 'react-native';
import { MarginsAndPaddings, h } from 'values/Dimensions';

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
