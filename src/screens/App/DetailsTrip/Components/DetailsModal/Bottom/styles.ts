import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import languages from 'values/languages';

export const styles = StyleSheet.create({
  inputContainerStyling: {
    borderBottomWidth: 0,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: BorderRadius.m,
    height: h * 0.07,
  },
  button: {
    width: w * 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: COLORS.black,
    marginTop: h * 0.009,
    marginBottom: -10,
  },
});
