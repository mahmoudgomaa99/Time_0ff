import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      marginVertical: MarginsAndPaddings.xl,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    imageContainer: {
      flex: 1.3,
      marginRight: lang === 'en' ? 5 : 0,
      marginLeft: lang === 'ar' ? 5 : 0,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 100,
    },
    contentContainer: {
      flex: 10,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    starContainer: {
      flexDirection: 'row',
    },
    name: {
      fontSize: 16,
      color: COLORS.black,
      maxWidth: '70%',
    },
    review: {
      fontSize: 14,
      color: '#5B5959',
      maxHeight: h * 0.025,
      textAlign: lang === 'ar' ? 'right' : undefined,
    },
  });
};
