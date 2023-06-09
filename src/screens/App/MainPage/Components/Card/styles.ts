import { StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import { h } from '../../../../../values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean, lang?: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 11,
      borderRadius: 14,
      paddingHorizontal: 10,
      paddingTop: 10,
      paddingBottom: 5,
      elevation: 6,
      shadowColor: isDarkMode ? COLORS.white : '#B4B4B433',
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
      shadowOffset: { height: 2.2, width: 0.1 },
      shadowOpacity: 1,
      marginHorizontal: 15,
    },
    imageContainer: {
      // width: w * 0.27,
      flex: 1,
    },
    image: {
      // width: '100%',
      // height: h * 0.15,
      flex:1,
      width:undefined,
      height:undefined,
      borderRadius: 15,
    },
    contentContainer: {
      // width: w * 0.59,
      flex: 2.2,
      marginHorizontal: 5,
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: isDarkMode ? COLORS.white : COLORS.black,
      maxWidth: w * 0.5,
      maxHeight: h * 0.07,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    decription: {
      fontSize: 10,
      color: '#B8B8B8',
      marginVertical: 5,
      maxHeight: lang === 'en' ? h * 0.05 : h * 0.06,
      fontFamily: Fonts.Cairo_Regular,
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    locationText: {
      fontSize: 10,
      color: isDarkMode ? COLORS.white : '#000000',
      lineHeight: 16,
      fontFamily: Fonts.Cairo_Regular,
    },
    end: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    Arabic: {
      flexDirection: 'row-reverse',
    },
    heart: {
      backgroundColor: isDarkMode ? COLORS.iconBackDarkMode : COLORS.white,
      paddingHorizontal: 5,
      paddingVertical: 8,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#B4B4B433',
      shadowOffset: { height: 2.2, width: 0.1 },
      shadowOpacity: 1,
      borderRadius: 20,
    },
  });
