import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Svg, { TName } from 'atoms/Svg';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../redux/language/index';
import { selectIsDarkMode } from 'redux/DarkMode';
import TextView from 'atoms/TextView';
import COLORS from 'values/colors';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';
import { images } from 'src/assets/images';
import Fonts from 'values/fonts';
import useModalHandler from 'hooks/Modal';
import Modal from './components/Modal';

type TType = 'primary' | 'secondry' | 'matches';
type TItem = {
  label: string;
  value: any;
};
type TProps = {
  type: TType;
  data: TItem[];
  loading?: boolean;
  touched: any;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  title?: string;
  values: any;
  setFieldValue: any;
  modalizeRef?: any;
  required?: boolean;
  stylingProp?: any;
  svgName?: TName;
  placeholder?: any;
  onDonePressed?: any;
  borderColor: any;
  disabled?: boolean;
};

const AppPicker = ({
  type,
  data,
  modalizeRef,
  title,
  stylingProp,
  svgName,
  onDonePressed,
  borderColor,
  disabled,
  ...props
}: TProps) => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const { closeCustomModal, openCustomModal, CustomModal } = useModalHandler({
    isCenter: true,
  });

  return (
    <View>
      <TouchableOpacity
        disabled={disabled || false}
        onPress={() => {
          openCustomModal();
        }}
        style={styles(isDarkMode, lang).inputContainer}>
        <TextView
          style={styles(isDarkMode, lang, props.values[props.name].value).txt}
          title={props.values[props.name].label || props.placeholder}
        />
        <Image
          source={images.downArrow}
          style={styles(isDarkMode, lang).icon}
        />
      </TouchableOpacity>
      <Modal
        CustomModal={CustomModal}
        data={data}
        props={props}
        closeModal={closeCustomModal}
      />
    </View>
  );
};

export default AppPicker;

const styles = (isDarkMode?: boolean, lang?: string, isChecked?: boolean) =>
  StyleSheet.create({
    inputContainer: {
      borderColor: '#EEEEEE',
      borderWidth: 1,
      paddingVertical: MarginsAndPaddings.xxl + 1,
      paddingHorizontal: MarginsAndPaddings.xxl,
      marginTop: 20,
      borderRadius: 15,
      justifyContent: 'space-between',
      color: COLORS.white,
      flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
    },
    icon: {
      width: 20,
      height: 20,
      resizeMode: 'stretch',
      marginTop: 5,
    },
    txt: {
      color: isChecked
        ? isDarkMode
          ? COLORS.white
          : COLORS.black
        : COLORS.grey,
      fontSize: 16,
      fontFamily: lang === 'ar' ? Fonts.NeoSansArabicBold : Fonts.Cairo_Medium,
    },
    modal_container: {
      height: h * 0.4,
      width: w * 0.9,
      backgroundColor: isDarkMode ? COLORS.darkMode : COLORS.white,
      borderRadius: 20,
    },
    item_container: {
      flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
      margin: 10,
      marginHorizontal: 10,
      alignItems: 'center',
    },
    radio_btn: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: isDarkMode ? COLORS.white : COLORS.black,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item_txt: {
      fontFamily: Fonts.Cairo_Medium,
      marginHorizontal: 10,
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
    inner_circle: {
      width: 10,
      height: 10,
      borderRadius: 50,
      backgroundColor: isChecked
        ? COLORS.primary
        : isDarkMode
        ? COLORS.darkMode
        : COLORS.white,
    },
  });
