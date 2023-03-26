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
        flex:3,
        position:'relative',
        marginBottom:MarginsAndPaddings.ml,
    },
    SVG:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:0,
        position:'absolute',
        zIndex:10,
        width:'100%',
        top:'5%'
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
        marginBottom:MarginsAndPaddings.xxl
    },


    arabic:{
        flexDirection:'row-reverse'
    },



    carouselItemContainer: {
        backgroundColor: 'white',
        width:'100%',
        height:'100%'
      },
      carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 27,
      },
      paginationContainer: {
        paddingVertical: 8,
        position:"absolute",
        top:'90%',
        right:'5%'
      },
      paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor: '#FFFFFF',
      },
      paginationInactiveDot: {
        backgroundColor: '#BFBFBF',
      },
})