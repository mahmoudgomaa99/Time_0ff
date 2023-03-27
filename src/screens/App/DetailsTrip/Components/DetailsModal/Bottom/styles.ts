import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
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
  button:{
    width:w*.80,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10
  },
  text:{
    fontSize:18,
    color:COLORS.black,
    marginTop:h*.009,
    marginBottom:-10
  }
});
