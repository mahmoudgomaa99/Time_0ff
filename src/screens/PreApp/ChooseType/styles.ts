import { StyleSheet } from 'react-native';
import { h } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (type?: string, choosen?: string) =>
  StyleSheet.create({
    conatiner: {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      paddingTop: h * 0.07,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: COLORS.black,
    },
    sub_title: {
      fontSize: 16,
      color: COLORS.black,
      marginTop: 20,
    },
    btns: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 24,
      marginTop: h * 0.1,
    },
    btn: {
      backgroundColor: type === choosen ? COLORS.primary : COLORS.white,
      width: '40%',
      height: h * 0.18,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 16,
      borderRadius: 20,
      //   borderWidth: 1,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      shadowColor: COLORS.black,
      elevation: 7,
    },
    btn_txt: {
      color: type === choosen ? COLORS.white : COLORS.primary,
    },
  });