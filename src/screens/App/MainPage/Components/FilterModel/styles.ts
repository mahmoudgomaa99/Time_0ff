import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'relative',
    backgroundColor: 'white',
    height: h * 0.6,
    marginTop: 'auto',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    paddingTop: 30,
    // maxHeight: h * 0.9,
  },

  inputContainerStyling: {
    borderBottomWidth: 0,
  },
  containerStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: BorderRadius.m,
    padding: MarginsAndPaddings.l,
    height: h * 0.07,
  },

  button: {
    marginTop: 20,
    width: w * 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 18,
    color: COLORS.black,
    marginTop: h * 0.009,
    marginBottom: -10,
  },
});
