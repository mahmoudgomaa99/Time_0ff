import { View, Text, ScrollViewComponent } from 'react-native';
import React, { useRef, useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import { useAppDispatch } from 'redux/store';
import Top from './Components/Top';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import COLORS from 'values/colors';
import languages from 'values/languages';
import { Formik } from 'formik';
import { Data } from './data';
import Button from 'components/molecules/Button';

const SortModel = ({
  isSortModel,
  setisSortModel,
  isDarkMode,
}: {
  isSortModel: boolean;
  setisSortModel: any;
  isDarkMode?: boolean;
}) => {
  const lang = useSelector(selectLanguage);
  return (
    <Modal
      isVisible={isSortModel}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <Top
          lang={lang}
          isSortModel={isSortModel}
          setisSortModel={setisSortModel}
        />
        <Formik initialValues={{}} onSubmit={values => console.log(values)}>
          {props =>
            Data(lang).map(value => (
              <View
                style={{
                  marginVertical: 15,
                  transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
                }}>
                <BouncyCheckbox
                  onPress={(isChecked: boolean) => {}}
                  size={40}
                  fillColor={COLORS.darkBlue}
                  unfillColor={'#F3F3F3'}
                  iconStyle={{ borderRadius: 5 }}
                  innerIconStyle={{ width: 40, height: 40, borderRadius: 5 }}
                  text={value.title}
                  textStyle={{
                    fontSize: 18,
                    color: isDarkMode ? COLORS.white : COLORS.black,
                    transform: [{ rotate: lang === 'ar' ? '180deg' : '0deg' }],
                  }}
                />
              </View>
            ))
          }
        </Formik>
        <Button type={'primary'} label={languages[lang].apply} />
      </View>
    </Modal>
  );
};

export default SortModel;
