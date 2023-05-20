import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // color: COLORS.white,
    // backgroundColor: COLORS.orange,
  },
  text: {
    color: COLORS.black,
    marginTop: 10,
    fontFamily: Fonts.Cairo_SemiBold,
  },
});
