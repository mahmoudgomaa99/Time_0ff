import { StyleSheet } from 'react-native';
import { MarginsAndPaddings } from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = (lang: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: MarginsAndPaddings.ml,
    },
    innerContainer: {
      flexDirection: lang === 'en' ? 'row' : 'row-reverse',
      justifyContent:'space-around',
      padding:10,
      borderColor:'#EEEEEE',
      borderWidth:1,
      borderRadius:10,
    },
    first:{
        flex:1,
        borderRightColor:'#EEEEEE',
        borderRightWidth:2,
    },
    second:{
        flex:1,
    },
    activeText:{
        color:"#0370D6",
        fontSize:16,
        textAlign:'center'
    },
    text:{
        color:COLORS.black,
        fontSize:16,
        textAlign:'center'
    }
  });
};
