import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import { h, MarginsAndPaddings, w } from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';
import TextView from 'atoms/TextView';
import Button from 'components/molecules/Button';
import languages from 'values/languages';

const Modal = ({
  CustomModal,
  data,
  props,
  closeModal,
}: {
  CustomModal: any;
  data: any;
  props: any;
  closeModal?: any;
}) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const [selected, setSelected] = useState(props.values[props.name]);
  return (
    <CustomModal>
      <View style={styles(isDarkMode, lang).modal_container}>
        <ScrollView>
          {data?.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() => {
                if (selected.value === item.value) {
                  setSelected('');
                } else {
                  setSelected(item);
                }
              }}>
              <View style={styles(isDarkMode, lang).item_container}>
                <View
                  style={
                    styles(isDarkMode, lang, selected.value === item.value)
                      .radio_btn
                  }>
                  <View
                    style={
                      styles(isDarkMode, lang, selected.value === item.value)
                        .inner_circle
                    }
                  />
                </View>
                <TextView
                  style={
                    styles(isDarkMode, lang, selected.value === item.value)
                      .item_txt
                  }
                  title={item?.label}
                />
              </View>
            </TouchableOpacity>
          ))}
          <Button
            type="primary"
            label={languages[lang].select}
            style={styles().button}
            onPress={() => {
              props.setFieldValue(props.name, selected);
              closeModal();
            }}
          />
        </ScrollView>
      </View>
    </CustomModal>
  );
};

export default Modal;

const styles = (isDarkMode?: boolean, lang?: string, isChecked?: boolean) =>
  StyleSheet.create({
    modal_container: {
      width: w * 0.95,
      paddingVertical: 20,
      paddingHorizontal: 5,
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
    button: {
      marginTop: 20,
      width: w * 0.8,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  });
