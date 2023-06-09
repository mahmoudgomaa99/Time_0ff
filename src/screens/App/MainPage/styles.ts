import { Platform, StyleSheet } from 'react-native';
import COLORS from 'values/colors';
import { BorderRadius, h, MarginsAndPaddings, w } from 'values/Dimensions';
import Fonts from 'values/fonts';

export const styles = (isDarkMode?: boolean, lang?: string) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      paddingTop: Platform.OS === 'android' ? h * 0.02 : h * 0.06,
      flexGrow: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 20,
    },
    welcome: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    welcomeBack: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    welcomeText: {
      fontSize: 14,
      color: COLORS.black,
      fontFamily: Fonts.Cairo_Regular,
    },
    nameText: {
      fontSize: 16,
      color: COLORS.black,
      textAlign: 'center',
      fontFamily: Fonts.Cairo_SemiBold,
    },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: -10,
    },
    input: {
      width: w * 0.8,
    },
    inputContainerStyling: {
      backgroundColor: '#F9F9F9',
      borderColor: '#E1E1E1',
      borderWidth: 1,
      borderRadius: 25,
      height: h * 0.055,
      padding: MarginsAndPaddings.xl,
      margin: 0,
    },
    paginationContainerr: {
      width: w,
      height: h * 0.3,
      marginBottom: -20,
    },
    imageBackground: {
      borderRadius: 20,
      height: h * 0.25,
      width: w * 0.95,
      overflow: 'hidden',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
    },
    categoryText: {
      marginTop: MarginsAndPaddings.ml,
      fontSize: 18,
      color: COLORS.black,
      marginBottom: MarginsAndPaddings.xxl,
    },
    trips: {
      marginLeft: -12,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tripText: {
      fontSize: 14,
      color: COLORS.black,
    },
    experiences: {
      marginTop: MarginsAndPaddings.ml,
      marginBottom: MarginsAndPaddings.xxl,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    experiencesText: {
      fontSize: 18,
      color: COLORS.black,
    },
    seeMore: {
      fontSize: 18,
      color: '#0370D6',
    },

    Arabic: {
      flexDirection: 'row-reverse',
    },

    carouselItemContainer: {
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
    paginationContainer: {
      paddingVertical: 8,
      position: 'absolute',
      top: '85%',
      right: '50%',
      transform: [{ translateX: 70 }],
    },
    paginationDot: {
      width: 25,
      height: 6,
      borderRadius: 5,
      marginHorizontal: 3,
      backgroundColor: '#B5E633',
    },
    paginationInactiveDot: {
      backgroundColor: '#FFFFFF',
    },
    menu_icon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      tintColor: COLORS.white,
      backgroundColor: COLORS.white,
      // shadowOffset: { width: 0, height: 10 },
      // shadowOpacity: 1,
      // shadowRadius: 1,
      shadowColor: COLORS.black,
      elevation: 3,
      marginLeft: lang === 'en' ? -70 : 20,
      marginRight: lang === 'en' ? 20 : -60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
  });
