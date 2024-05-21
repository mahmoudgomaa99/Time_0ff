import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainerStyling: {
    borderBottomWidth: 0,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 10,
    height: h * 0.05,
    width: w * 0.14,
    marginHorizontal: 12,
  },
  label: {
    fontSize: 14,
    color: '#000',
    fontFamily: Fonts.RobotoMedium,
    marginTop: 10,
  },
});
