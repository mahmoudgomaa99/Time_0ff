import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: MarginsAndPaddings.xxl,
    flex: 1,
  },
  skip: {
    color: '#B5E633',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: Platform.OS === 'android' ? h * 0.006 : '',
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '500',
  },
  line: {
    width: w * 0.13,
    height: Platform.OS === 'android' ? h * 0.0035 : h * 0.002,
    marginTop: Platform.OS === 'android' ? h * 0.004 : '',
    borderRadius: 100,
    backgroundColor: COLORS.black,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    color: '#444444',
    textAlign: 'center',
    width: w * 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    fontWeight: '400',
    // maxWidth: w * 0.3,
  },

  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: BorderRadius.m,
    height: h * 0.08,
    paddingVertical: 5,
  },
  forget: {
    marginTop: Platform.OS === 'android' ? h * 0.035 : h * 0.025,
    color: '#9FCE24',
    fontSize: 16,
    marginBottom: h * 0.04,
    fontWeight: '400',
    lineHeight: 21,
  },
  or: {
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.grey,
    lineHeight: 21,
    fontWeight: '500',
    marginTop: 10,
  },
  containerMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: h * 0.02,
  },
  media: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    marginHorizontal: MarginsAndPaddings.l,
    padding: MarginsAndPaddings.l,
    borderRadius: BorderRadius.s,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: h * 0.04,
  },
  create: {
    color: COLORS.darkBlue,
    textDecorationColor: COLORS.blue,
    textDecorationLine: 'underline',
    fontSize: 14,
    // marginHorizontal: 4,
    lineHeight: 19,
    textAlign: 'center',
  },
  label_style: {
    color: '#C4C3C3',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 14,
  },
  notMember: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: COLORS.secondery,
  },
});

export default styles;
