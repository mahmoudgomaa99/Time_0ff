import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
import { w } from '../../../values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  bottom_android: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: COLORS.white,
    paddingHorizontal: w * 0.06,
    paddingTop: h * 0.01,
    marginTop: -h * 0.03,
    flex: 1,
  },
  next: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 30,
    width: 30,
    backgroundColor: '#0370D6',
    position: 'absolute',
    left: '20%',
    bottom: '20%',
  },
  title: {
    fontSize: 16,
    color: '#222222',
    lineHeight: 30,
    marginBottom: 5,
    fontFamily: Fonts.Cairo_Bold,
  },
  desc: {
    fontSize: 16,
    color: '#4D4D4D',
    lineHeight: 19.2,
    fontFamily: Fonts.Cairo_Medium,
  },
});
