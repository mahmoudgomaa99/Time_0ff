import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
import { w } from '../../../values/Dimensions';

export const styles = StyleSheet.create({
  backArrow: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e8e8e',
    position: 'absolute',
    top: h * 0.05,
    right: 30,
    padding: 12,
  },
  bottom: {
    marginHorizontal: 16,
    paddingHorizontal: 15,
    paddingTop: 20,
    borderRadius: 20,
    marginVertical: h * 0.05,
  },
  bottom_android: {
    borderRadius: 25,
    marginHorizontal: 16,
    marginVertical: h * 0.05,
    // flex: 0.23,
    backgroundColor: COLORS.alfaBlack,
    paddingHorizontal: w * 0.06,
    paddingTop: h * 0.01,
  },
  next: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 25,
    height: 30,
    width: 30,
    backgroundColor: COLORS.alfaBlack,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.white,
    lineHeight: 30,
    marginBottom: 5,
  },
  desc: {
    maxHeight: h * 0.05,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
    lineHeight: 20,
  },
});
