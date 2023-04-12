import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

export const styles = StyleSheet.create({
  range: {
    marginVertical: 20,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: COLORS.black,
    marginTop: h * 0.009,
    marginBottom: 5,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  priceText: {
    fontSize: 16,
    color: COLORS.black,
  },
});
