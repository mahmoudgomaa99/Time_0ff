import { View, Text, Platform } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FilterModel from '../FilterModel';

const InputSec = ({
  isFilterModalVisable,
  setFilterModalVisable,
  lang,
  isDarkMode,
}: {
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  lang: string;
  isDarkMode?: boolean;
}) => {
  return (
    <View
      style={[
        styles().search,
        {
          flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
          paddingHorizontal: lang === 'ar' ? 5 : 15,
          paddingLeft: lang === 'ar' ? 10 : 5,
          paddingRight: lang === 'ar' ? 0 : 25,
        },
      ]}>
      <View style={styles().input}>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={values => console.log(values)}>
          {props => (
            <>
              <InputView
                {...props}
                name="search"
                onChangeText={props.handleChange('search')}
                value={props.values.search}
                inputContainerStyling={styles(isDarkMode).inputContainerStyling}
                placeholder={languages[lang].searchInApp}
                leftIcon={<Svg name="search" size={20} />}
                containerStyle={{ borderWidth: 0 }}
                style={{ borderWidth: 0 }}
                inputStyle={{}}
              />
            </>
          )}
        </Formik>
      </View>
      <View style={[styles().filter, { marginLeft: lang === 'en' ? -11 : 0 }]}>
        <TouchableOpacity
          onPress={() => {
            setFilterModalVisable(true);
          }}>
          <Svg name="rightMenu" size={65} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSec;
