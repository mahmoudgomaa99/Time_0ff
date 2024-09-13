import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  paginationContainer: {
    width: w,
    height: h * 0.3,
    marginBottom: -25,
  },
  imageBackground: {
    borderRadius: 20,
    height: h * 0.2,
    width: w * 0.92,
    overflow: 'hidden',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  img: {
    height: h * 0.23,
    width: w * 0.93,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});
