import { View, Text, Platform } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/language/index';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';

const InputSec = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View
      style={[
        styles.search,
        {
          flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
          paddingHorizontal: lang === 'ar' ? 5 : 15,
          paddingLeft: lang === 'ar' ? 10 : 5,
          paddingRight: lang === 'ar' ? 0 : 25,
        },
      ]}>
      <View style={styles.input}>
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
                inputContainerStyling={styles.inputContainerStyling}
                placeholder={languages[lang].searchInApp}
                leftIcon={<Svg name="search" size={20} />}
              />
            </>
          )}
        </Formik>
      </View>
      <View style={[styles.filter, { marginLeft: lang === 'en' ? -11 : 0 }]}>
        <Svg name="rightMenu" size={65} />
      </View>
    </View>
  );
};

export default InputSec;
