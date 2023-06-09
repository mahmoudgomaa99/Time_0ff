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

const InputSec = ({
  isFilterModalVisable,
  setFilterModalVisable,
  lang,
  isDarkMode,
  search,
  setSearch,
  setpage,
}: {
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  lang: string;
  isDarkMode?: boolean;
  search?: string;
  setSearch?: any;
  setpage: any;
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
          initialValues={{ search: search }}
          onSubmit={values => console.log(values)}>
          {props => (
            <>
              <InputView
                {...props}
                name="search"
                onChangeText={() => {
                  setpage(1);
                  props.handleChange('search');
                }}
                value={props.values.search}
                inputContainerStyling={styles(isDarkMode).inputContainerStyling}
                placeholder={languages[lang].searchInApp}
                leftIcon={<Svg name="search" size={20} />}
                containerStyle={{ borderWidth: 0 }}
                style={{ borderWidth: 0 }}
                inputStyle={{}}
                onChange={e => {
                  setSearch(e.nativeEvent.text);
                  props.handleChange('search');
                  setpage(1);
                }}
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
