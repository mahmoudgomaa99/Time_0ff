import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterText: {
    fontSize: 20,
    color: COLORS.black,
  },
  resetText: {
    fontSize: 16,
  },
});
