import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  top: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BookText: {
    marginLeft:w*.25,
    marginRight:'auto',
    fontSize: 20,
    color: COLORS.black,
  },
});
