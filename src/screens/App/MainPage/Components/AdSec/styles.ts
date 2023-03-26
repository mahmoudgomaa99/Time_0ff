import { StyleSheet } from 'react-native';
import { h, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  paginationContainer: {
    width: w,
    height: h * 0.3,
    marginBottom: -20,
  },
  imageBackground: {
    borderRadius: 20,
    height: h * 0.25,
    width: w * 0.92,
    overflow: 'hidden',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  img: {
    height: h * 0.22,
    width: w * 0.92,
    borderRadius: 20,
  },
});
