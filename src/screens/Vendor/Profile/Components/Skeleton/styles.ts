import { StyleSheet } from 'react-native';
import { BorderRadius, h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = () =>
  StyleSheet.create({
    image: {
        marginTop:15,
      width: w * 0.3,
      height: w * 0.3,
      borderRadius: w * 0.1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    textIn: {
      width: w * 0.3,
      height: w * 0.1,
      marginTop: h * 0.009,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    containerStyleIn: {
      borderRadius: BorderRadius.m,
      height: h * 0.086,
      paddingVertical: 7,
      width: w * 0.9,
      marginVertical: 15,
      borderWidth: 1,
    },
  });
