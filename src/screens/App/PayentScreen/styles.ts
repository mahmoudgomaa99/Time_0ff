import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        justifyContent: "flex-start",
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
      },
      dateAndCode: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      cardNumber: {
        fontSize: 18,
        height: 50,
        color: "#000",
        backgroundColor: "#ffffff",
        borderColor: "#006afe",
        borderRadius: 5,
        borderWidth: 2,
      },
      expiryDate: {
        fontSize: 18,
        height: 50,
        width: "48%",
        color: "#000",
        backgroundColor: "#ffffff",
        borderColor: "#006afe",
        borderWidth: 2,
      },
      cvv: {
        fontSize: 18,
        height: 50,
        width: "48%",
        color: "#00055",
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderColor: "#006afe",
      },
      button: {
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: "center",
        backgroundColor: "#4285F4",
      },
      buttonText: {
        color: "white",
        fontSize: 16,
      },
})