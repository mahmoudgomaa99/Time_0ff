import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: MarginsAndPaddings.l,
    position:'relative'
  },
  skip:{
    color:COLORS.green
  },
  image: {
    width: 150,
    height: 150,
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
    fontSize: 30,
  },
  line:{
    width:w*.18,
    height:h*.006,
    borderRadius:100,
    backgroundColor:COLORS.black,
    marginLeft:'auto',
    marginRight:'auto'
  },
  subTitle: {
    color: COLORS.black,
    textAlign: 'center',
    width: w * 0.6,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
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
  forget:{
    marginTop:h*.025,
    color:COLORS.green,
    textAlign:'right'
  },
  or:{
    textAlign:'center',
    fontSize:20,
    color:COLORS.grey
  },
  containerMedia:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:h*.03
  },
  media:{
    borderColor:COLORS.grey,
    borderWidth:1,
    marginHorizontal:MarginsAndPaddings.l,
    padding:MarginsAndPaddings.l,
    borderRadius:BorderRadius.s
  },
  lastText:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:h*.04
  },
  create:{
    color:COLORS.blue,
    textDecorationColor:COLORS.blue,
    textDecorationLine:'underline'
  }
});

export default styles;
