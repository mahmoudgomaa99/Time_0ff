import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { h, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import Fonts from 'values/fonts';
import TextView from 'atoms/TextView';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';
import Svg from 'atoms/Svg';

const TermsModal = ({
  terms,
  CustomModal,
  closeModal,
}: {
  terms?: string;
  CustomModal?: any;
  closeModal?: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  return (
    <CustomModal>
      <View style={styles(isDarkMode).modalContainer}>
        <View
          style={[
            styles().top,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <TouchableOpacity
            onPress={() => {
              closeModal();
            }}>
            <Svg name="close" size={50} />
          </TouchableOpacity>
          <TextView
            title={languages[lang].termCondition}
            style={styles(isDarkMode).BookText}
          />
        </View>
        <TextView title={terms} style={styles(isDarkMode).label} />
      </View>
    </CustomModal>
  );
};

export default TermsModal;

const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    top: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    BookText: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: 20,
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontFamily: Fonts.Cairo_SemiBold,
    },
    modalContainer: {
      height: 400,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      marginRight: -10,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      padding: h * 0.02,
      shadowColor: COLORS.secondery,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: -10 },
      paddingTop: 20,
      width: w * 1.03,
      alignSelf: 'center',
      marginBottom: -10,
    },
    label: {
      color: isDarkMode ? COLORS.white : COLORS.black,
      fontSize: 20,
      margin: 10,
      fontFamily: Fonts.Cairo_Regular,
      maxWidth: w * 0.9,
    },
  });
