import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.green,
  },
  text: {
    color: COLORS.black,
    marginTop: 10,
  },
});
