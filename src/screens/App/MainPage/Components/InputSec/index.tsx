import { View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import InputView from 'components/molecules/Input';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'lodash';

const InputSec = ({
  isFilterModalVisable,
  setFilterModalVisable,
  lang,
  isDarkMode,
  setSearch,
  setpage,
  search,
}: {
  isFilterModalVisable: boolean;
  setFilterModalVisable: any;
  lang: string;
  isDarkMode?: boolean;
  setSearch?: any;
  search?: string;
  setpage?: any;
}) => {
  return (
    <View
      style={[
        styles().search,
        {
          flexDirection: lang === 'ar' ? 'row-reverse' : 'row',
          paddingHorizontal: lang === 'ar' ? 5 : 15,
          paddingLeft: lang === 'ar' ? 10 : 5,
          paddingRight: lang === 'ar' ? 0 : 5,
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
                onChangeText={text => {
                  setSearch(text);
                  props.setFieldValue('search', text);
                  props.handleChange('search');
                  setpage(1);
                }}
                onChange={e => {
                  setSearch(e.nativeEvent.text);
                  props.setFieldValue('search', e.nativeEvent.text);
                  props.handleChange('search');
                  setpage(1);
                }}
                value={props.values.search}
                inputContainerStyling={styles(isDarkMode).inputContainerStyling}
                placeholder={languages[lang].searchInApp}
                leftIcon={<Svg name="search" size={20} />}
                containerStyle={{ borderWidth: 0 }}
                style={{ borderWidth: 0 }}
                inputStyle={{}}
                rightIcon={
                  <View
                    style={[
                      styles().filter,
                      { marginRight: lang === 'en' ? -15 : 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setFilterModalVisable(true);
                      }}>
                      <Svg name="rightMenu" size={85} />
                    </TouchableOpacity>
                  </View>
                }
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default InputSec;
