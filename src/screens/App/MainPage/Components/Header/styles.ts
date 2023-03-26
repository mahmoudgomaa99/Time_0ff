import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  Top: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  welcome: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  welcomeBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 19,
  },
  nameText: {
    fontSize: 16,
    color: COLORS.black,
    lineHeight: 19,
    textAlign: 'center',
    fontWeight: '400',
  },
});
