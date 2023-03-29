import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

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
    borderRadius: 25,
    marginVertical: h * 0.05,
  },
  next: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
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
