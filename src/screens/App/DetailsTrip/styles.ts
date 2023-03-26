import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { MarginsAndPaddings } from 'values/Dimensions';
import { w, h } from '../../../values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    height: h * 0.45,
    width: w,
    marginBottom: MarginsAndPaddings.ml,
  },
  SVG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    top: '10%',
  },
  text: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: COLORS.black,
    marginBottom: 20,
  },
  svgAndStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.black,
    marginHorizontal: 5,
  },
  descriptionTitle: {
    fontSize: 18,
    color: '#0370D6',
    marginBottom: MarginsAndPaddings.xxl,
  },
  descriptionText: {
    fontSize: 14,
    color: '#5B5959',
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: 15,
  },
  bottomSec: { justifyContent: 'space-between', flex: 1 },
  price: {
    fontSize: 24,
    color: COLORS.black,
    lineHeight: 32,
    marginTop: '2.5%',
  },
  arabic: {
    flexDirection: 'row-reverse',
  },
  carouselItemContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width: w,
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 27,
  },
  paginationContainer: {
    paddingVertical: 8,
    position: 'absolute',
    top: '90%',
    right: '5%',
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 5,
    marginHorizontal: -3,
    backgroundColor: '#FFFFFF',
  },
  paginationInactiveDot: {
    backgroundColor: '#BFBFBF',
  },
  btn_text: { color: COLORS.white, fontSize: 16, lineHeight: 21 },
});
