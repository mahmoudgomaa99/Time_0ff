import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
export const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : '#ffff',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: h * 0.06,
    },
    dateAndCode: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardNumber: {
      fontSize: 18,
      height: 50,
      color: '#000',
      backgroundColor: '#ffffff',
      borderColor: '#006afe',
      borderRadius: 5,
      borderWidth: 2,
    },
    expiryDate: {
      fontSize: 18,
      height: 50,
      width: '48%',
      color: '#000',
      backgroundColor: '#ffffff',
      borderColor: '#006afe',
      borderWidth: 2,
    },
    cvv: {
      fontSize: 18,
      height: 50,
      width: '48%',
      color: '#00055',
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#006afe',
    },
    button: {
      height: 50,
      borderRadius: 5,
      marginTop: 20,
      justifyContent: 'center',
      backgroundColor: '#4285F4',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    card: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#8e8e8e',
      marginVertical: 10,
      alignItems: 'center',
      marginHorizontal: 10,
      borderRadius: 10,
      justifyContent: 'space-between',
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 10,
      backgroundColor: isDarkMode ? COLORS.white : COLORS.black,
      marginHorizontal: 2,
    },
    radioButton: {
      width: 15,
      height: 15,
      borderRadius: 15,
      borderColor: COLORS.grey,
      borderWidth: 1,
      marginHorizontal: 10,
    },
    icon: {
      marginRight: 10,
    },
    add: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: COLORS.primary,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plus: {
      fontSize: 30,
      color: COLORS.white,
    },
  });
