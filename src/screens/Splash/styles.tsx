import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    hight: '100%',
    alignItems: 'center',
    paddingVertical: 25,
  },
  title: {
    marginTop: 17,
  },
});
