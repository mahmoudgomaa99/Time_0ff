import { StyleSheet } from "react-native";
import COLORS from "values/colors";
import { w } from "values/Dimensions";

export const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      BookText:{
        marginLeft:w*.20,
        marginRight:'auto',
        fontSize:20,
        color:COLORS.black,
      }
})