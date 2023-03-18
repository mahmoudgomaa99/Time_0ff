import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: MarginsAndPaddings.l,
    position: 'relative',
  },
  image: {
    width: 142,
    height: 142,
    borderColor: '#eee',
    borderWidth: 2,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: COLORS.black,
    textAlign: 'center',
    marginTop: MarginsAndPaddings.xxs,
    fontSize: 26,
  },
  line:{
    width:w*.18,
    height:h*.003,
    borderRadius:100,
    backgroundColor:COLORS.black,
    marginLeft:'auto',
    marginRight:'auto'
  },
  inputContainerStyling: {
    borderBottomWidth:0
  },
  containerStyle:{
    backgroundColor:COLORS.white,
    borderWidth:1,
    borderColor:COLORS.lightGrey,
    borderRadius:BorderRadius.m,
    padding:MarginsAndPaddings.l,
    height:h*.09
  },
  lastText:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:h*.01
  },
  create:{
    color:COLORS.darkBlue,
    textDecorationColor:COLORS.blue,
    textDecorationLine:'underline'
  }
});
