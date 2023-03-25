import { StyleSheet } from "react-native";
import COLORS from "values/colors";
import { MarginsAndPaddings } from "values/Dimensions";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        padding:MarginsAndPaddings.xl
    },
    image:{
        flex:2,
    },
    text:{
        flex:2,
    },
    title:{
        fontSize:24,
        color:COLORS.black,
        marginBottom:MarginsAndPaddings.ml
    },
    svgAndStar:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:MarginsAndPaddings.ml
    },
    subTitle:{
        fontSize:14,
        color:COLORS.black,
        marginHorizontal:5
    },
    descriptionTitle:{
        fontSize:18,
        color:'#0370D6',
        marginBottom:MarginsAndPaddings.xxl
    },
    descriptionText:{
        fontSize:14,
        color:'#5B5959'
    },
    bottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    price:{
        fontSize:24,
        color:COLORS.black,
        marginBottom:MarginsAndPaddings.m
    },


    arabic:{
        flexDirection:'row-reverse'
    }
})