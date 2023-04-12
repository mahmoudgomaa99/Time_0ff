import { StyleSheet } from "react-native";
import { h } from "values/Dimensions";

export const styles = StyleSheet.create({
    modalContainer: {
        position: 'relative',
        backgroundColor: 'white',
        height: h * 0.70,
        marginTop: 'auto',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20,
        paddingTop: 30,
        maxHeight: h * 0.9,
      },
      button:{
        marginVertical:20,
      }
})