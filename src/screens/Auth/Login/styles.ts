import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: MarginsAndPaddings.l,
    position: 'relative',
  },
  skip: {
    color: '#B5E633',
    fontSize: 18,
  },
  image: {
    width: 142,
    height: 142,
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    marginTop: MarginsAndPaddings.xxs,
    fontSize: 30,
  },
  line: {
    width: w * 0.18,
    height: h * 0.003,
    borderRadius: 100,
    backgroundColor: COLORS.black,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    color: '#444444',
    textAlign: 'center',
    width: w * 0.6,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
  },
  inputContainerStyling: {
    borderBottomWidth: 0,
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: BorderRadius.m,
    padding: MarginsAndPaddings.l,
    height: h * 0.09,
  },
  forget: {
    marginTop: h * 0.025,
    color: '#9FCE24',
    textAlign: 'right',
    fontSize: 16,
    marginBottom:h*.04
  },
  or: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.grey,
  },
  containerMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: h * 0.03,
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
  },
});

export default styles;
