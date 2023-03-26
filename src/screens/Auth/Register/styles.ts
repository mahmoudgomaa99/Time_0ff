import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: MarginsAndPaddings.l,
  },
  title: {
    color: COLORS.black,
    fontSize: 24,
  },
  line: {
    width: w * 0.18,
    height: h * 0.002,
    borderRadius: 100,
    backgroundColor: COLORS.black,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  inputContainerStyling: {
    borderBottomWidth: 0,
    direction: 'rtl',
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: BorderRadius.m,
    height: h * 0.08,
    paddingVertical: 7,
  },
  lastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: h * 0.02,
  },
  create: {
    color: COLORS.darkBlue,
    textDecorationColor: COLORS.blue,
    textDecorationLine: 'underline',
    marginHorizontal: 4,
  },
  label_style: {
    color: '#C4C3C3',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
  },
});
